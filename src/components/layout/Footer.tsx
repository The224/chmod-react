import './Footer.css';

function Footer() {
  return (
    <nav className="footer mt-auto py-3 bg-light">
      <div className="container" style={{ textAlign: "right" }}>
        <span className="text-muted">
          Made by <a href="https://the224.info/">The224</a>
        </span>
      </div>
    </nav>
  );
}

export default Footer;
