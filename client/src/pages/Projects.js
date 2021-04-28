import React from 'react';
import Jumbotron from '../components/Jumbotron';
const Projects = () => {
  return (
    <div>
      <main>
        <Jumbotron imageBG="url(/assets/Images/kiki-jared.jpg)" />
        <section className="container-fluid gif-section">
          <div className="row mt-0 mb-0">
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/JaredWeaver/Eat-Da-Burger"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    src="assets/Images/subscriptionTracker.gif"
                    alt="Screenshot of subscription tracker demo"
                  />
                </a>
                <div className="card-body">
                  <h2 className="card-header">Subscription Tracker</h2>
                  <p className="card-text">
                    {' '}
                    A full-stack app that enables users to add recurring
                    subscriptions and view them all on one calendar. I
                    contributed the concept and the front-end design and
                    functionailty. Deployed to heroku{' '}
                    <a
                      href="https://subscription-trkr.herokuapp.com/"
                      className="text-secondary"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/JaredWeaver/Eat-Da-Burger"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    src="assets/Images/eat-da-burger-demo.gif"
                    alt="Screenshot of burger builder demo."
                  />
                </a>
                <div className="card-body">
                  <h2 className="card-header">Eat-Da-Burger</h2>
                  <p className="card-text">
                    Creates a burger logger with MySQL, Node, Express,
                    Handlebars and a homemade ORM.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/JaredWeaver/Employee-Tracker"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    src="assets/Images/employee-trk-demo.gif"
                    alt="Screenshot of the employee tracker in action."
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Employee Tracker</h2>
                  <p className="card-text">
                    A command line application that builds a database for
                    managing a company's employees using node, inquirer, and
                    MySQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a href="https://github.com/JaredWeaver/Note-Taker">
                  <img
                    className="card-img-top active"
                    src="assets/Images/notetaker-demo.gif"
                    alt="Screenshot of scheduler in action"
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Note-Taker</h2>
                  <p className="card-text">
                    {' '}
                    https://github.com/JaredWeaver/Note-Taker
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/JaredWeaver/week-10-teamprofile-js"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    src="assets/Images/team-gen-demo.gif"
                    alt="Screenshot of team profile generator."
                  />
                </a>
                <div className="card-body">
                  <h2 className="card-header">Team Profile Generator</h2>
                  <p className="card-text">
                    This is an application that utilizes inquirer to gather a
                    user's responses to prompts in the command line, and
                    dynamically renders an HTML file displaying those responses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/JaredWeaver/week-9-readme-node"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    src="assets/Images/ReadMe-Generator-Demo.gif"
                    alt="Screenshot of the readme generator in action."
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">ReadMe Generator </h2>
                  <p className="card-text">
                    Generates quality README.md files through the inquirer
                    package on npm.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a href="https://github.com/cparros/project1" target="_blank">
                  <img
                    className="card-img-top active"
                    src="assets/Images/blackjack-demo.gif"
                    alt="Screenshot of blackjack demo."
                  />
                </a>
                <div className="card-body">
                  <h2 className="card-header">BlackJack</h2>
                  <p className="card-text">
                    First team project where we created a functioning BlackJack
                    game using the Deck of Cards API. I contributed to both the
                    Front End, and the Back End.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 mb-4">
                <a
                  href="https://github.com/JaredWeaver/week-6-Weather-Dashboard-APIs"
                  target="_blank"
                >
                  <img
                    className="card-img-top active"
                    src="assets/Images/weather-dashboard-demo.gif"
                    alt="Screenshot of weather dashboard in action."
                  />{' '}
                </a>
                <div className="card-body">
                  <h2 className="card-header">Weather Dashboard</h2>
                  <p className="card-text">
                    Used JQuery to dynamically append weather information from a
                    user requested city.Utilized the OpenWeather API.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
