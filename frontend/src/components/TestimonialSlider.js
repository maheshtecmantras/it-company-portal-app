import { useEffect, useState } from 'react';

function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const testimonial = testimonials[index];

  return (
    <article className="testimonial-card">
      <p>“{testimonial.quote}”</p>
      <span>{testimonial.author}</span>
    </article>
  );
}

export default TestimonialSlider;
