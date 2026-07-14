import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../services/api';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', password: '', password_confirmation: '' });
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.password !== form.password_confirmation) {
      setFeedback({ message: 'Passwords must match.', type: 'error' });
      return;
    }

    setSubmitting(true);
    setFeedback({ message: '', type: '' });

    try {
      const { message = 'Registration complete' } = await register(form);
      setFeedback({ message, type: 'success' });
      setForm({ name: '', company: '', email: '', phone: '', password: '', password_confirmation: '' });
    } catch (error) {
      const msg = error?.response?.data?.message || 'Unable to register at this time.';
      setFeedback({ message: msg, type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="form-card">
        <h2>Partner registration</h2>
        <p>Share a few details and we will scope a discovery workshop.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Alex Rivera"
          />

          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="Your firm"
          />

          <label htmlFor="email">Business email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="hello@company.com"
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="(555) 123-4567"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Create password"
          />

          <label htmlFor="password_confirmation">Confirm password</label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={form.password_confirmation}
            onChange={handleChange}
            required
            placeholder="Confirm password"
          />

          {feedback.message && <p className={`form-feedback ${feedback.type}`}>{feedback.message}</p>}

          <button className="btn primary" type="submit" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Request access'}
          </button>
        </form>
        <p className="form-note">
          Already a client? <Link to="/login">Sign in</Link> to your dashboard.
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
