import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://myweb-eta-cyan.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="py-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
