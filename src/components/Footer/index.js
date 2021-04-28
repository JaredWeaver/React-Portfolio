import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-md-8">
            <h3> &copy; 2021 Jared Weaver </h3>
          </div>
          <div className="col-md-4 footerLink">
            <a href="https://www.linkedin.com/in/jaredweaver2/" target="blank">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://github.com/JaredWeaver" target="blank">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="mailto:jared.weaver2@gmail.com" target="blank">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
