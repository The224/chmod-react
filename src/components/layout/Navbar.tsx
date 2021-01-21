import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand">
          <svg style={{ width: "3rem", height: "3rem", marginTop: "0.5rem" }} viewBox="0 0 24 24" className="d-inline-block align-top" >
            <path fill="currentColor" d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z" />
          </svg>
          <span className="ms-3 me-3">chmod <br /> calculator</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="https://the224.info/" target="_blank" rel="noreferrer">By The224</a>
            <a className="nav-link" href="https://en.wikipedia.org/wiki/Chmod" target="_blank" rel="noreferrer">Wikipedia</a>
            <a className="nav-link" href="https://linux.die.net/man/1/chmod" target="_blank" rel="noreferrer">Man page</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
