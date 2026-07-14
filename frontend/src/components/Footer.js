function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} IT Company. Built for technology leaders.</p>
      <div>
        <a href="mailto:hello@itcompany.com">hello@itcompany.com</a>
        <span className="pipe">|</span>
        <a href="tel:+15551234567">(555) 123-4567</a>
      </div>
    </footer>
  );
}

export default Footer;
