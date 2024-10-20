import React from "react";

const AboutContainer = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="card"
            style={{
              transition: "none",
              boxShadow: "none",
              transform: "none",
              backgroundColor: "#4b0082",
            }}
          >
            <div className="card-body">
              <h1 className="text-center mb-4">About This Project</h1>

              <h4 className="text-center mb-3">Author: Alexis Davidson</h4>

              <p className="lead text-center">
                Welcome to the Joke Generator App! <br />
                This project was created to showcase a simple yet interactive
                application that allows users to fetch and display jokes of
                various types.
              </p>

              <h4 className="text-center mt-4">Key Features:</h4>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  <strong>Random Joke Fetching:</strong> Fetch a random joke
                  from the home page.
                </li>

                <li className="list-group-item">
                  <strong>Joke Type Selection:</strong> Choose from different
                  categories of jokes such as General, Programming, or Dad jokes
                  from the Joke Types page, and fetch a random joke from that
                  category.
                </li>

                <li className="list-group-item">
                  <strong>Clear Selection:</strong> Easily clear the current
                  joke type selection and start again.
                </li>
              </ul>

              <h4 className="text-center mt-4">Technologies Used:</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap for Styling</li>
                <li className="list-group-item">Axios for API Requests</li>
                <li className="list-group-item">
                  Zustand for State Management
                </li>
              </ul>

              <div className="text-center mt-4">
                <a href="/" className="btn btn-primary me-2" role="button">
                  Go Back Home
                </a>
                <a
                  href="https://github.com/adavidson21/Spring-API-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View on GitHub!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
