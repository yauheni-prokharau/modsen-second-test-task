import React from "react";

import "./styles.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <section className="error-container">
          <div className="error">
            <h1>Oops!</h1>
            <h2>An error occurred</h2>
            <p>{error && error.toString()}</p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
