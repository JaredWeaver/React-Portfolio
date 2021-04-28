import React from "react";

function Header() {
  return (
    <header className="container mb-0">
    <nav className="navbar fixed-top navbar-expand-lg navbar-custom">
      <h2 className="navbar-brand">Jared Weaver</h2>
      <div>
        <a href="https://www.linkedin.com/in/jaredweaver2/" target="_blank"><i className="fab fa-linkedin-in fa-sm"></i></a>  
        <a href="https://github.com/JaredWeaver" target="_blank"><i className="fab fa-github fa-xs"></i></a>
        <a href="mailto:jared.weaver2@gmail.com" target="_blank"><i className="fas fa-envelope fa-sm"></i></a>
      </div>
      <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
}

export default Header;
