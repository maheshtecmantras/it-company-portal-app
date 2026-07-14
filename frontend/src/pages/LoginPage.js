import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/api';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback({ message: '', type: '' });

    try {
      const { message = 'Login successful' } = await login(form);
      setFeedback({ message, type: 'success' });
    } catch (error) {
      const msg = error?.response?.data?.message || 'Unable to authenticate with the provided credentials.';
      setFeedback({ message: msg, type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="form-card">
        <h2>Client login</h2>
        <p>Access detailed roadmaps, deployment notes, and shared workspaces.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="********"
          />

          {feedback.message && <p className={`form-feedback ${feedback.type}`}>{feedback.message}</p>}

          <button className="btn primary" type="submit" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Secure login'}
          </button>
        </form>
        <p className="form-note">
          Not part of the partner program yet? <Link to="/register">Request access</Link>.
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
