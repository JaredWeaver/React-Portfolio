import React from 'react';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
  return (
    <div>
      <main>
        <Jumbotron imageBG="url(/assets/Images/IMG-9675.jpg)"/>

        <div className="container-fluid mt-0 mb-0">
          <div className="row">
            <div className="col-lg-4 panel-pad-10">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h2 className="display-4 text-center"> TL;DR </h2>
                  <p>
                    {' '}
                    Front End Developer coming from years of experience working
                    in a high-stakes management role in the events industry.
                    Ready to cross-utilize my instilled teamwork,
                    leadership, and buoyancy. Through
                    my vast experience in working within teams, and for
                    high-profile clients, I know that I will make a positive
                    impact on any company or organization I am involved with.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 panel-pad-10">
              <div className="panel panel-default">
                <h2 className="display-4 text-center">Links</h2>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="portfolio.html"
                  role="button"
                >
                  Projects
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="contact.html"
                  role="button"
                >
                  Contact Me
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="https://github.com/JaredWeaver"
                  role="button"
                >
                  Github
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="https://www.linkedin.com/in/jaredweaver2/"
                  role="button"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-secondary btn-lg btn-block"
                  href="assets/Jared-Weaver-Resume.pdf"
                  role="button"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="col-lg-4 panel-pad-10">
              <div className="panel panel-default">
                <h2 className="display-4 text-center">Skillset</h2>
                <div className="table-responsive">
                  <table className="table table-custom">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>HTML5</td>
                        <td>JavaScript</td>
                        <td>React</td>
                      </tr>
                      <tr>
                        <td>CSS3</td>
                        <td>MongoDB</td>
                        <td>Express</td>
                      </tr>
                      <tr>
                        <td>Bootstrap</td>
                        <td>
                          Node JS
                        </td>
                        <td>mySQL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
