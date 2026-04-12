import { useState } from "react";
import { z } from "zod";
import "../App.css";
import "../style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


// Zod Schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  date: z.string().min(1, "Date is required"),
});

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      // 🔧 FIX: errors → issues
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <>
      <Header />

      <section className="form-section">
        <div className="container">
          <div className="form-card">
            <h2>Submit Your Details</h2>

            <form className="form-grid" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </label>

              <label>
                Email
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </label>

              <label>
                Booking Date
                <input
                  type="date"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
                {errors.date && <p className="error">{errors.date}</p>}
              </label>

              <button className="btn-cta">Submit</button>
            </form>

            {response && (
              <div className="response-box">
                <h3>Server Response</h3>
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}