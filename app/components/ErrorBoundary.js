import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, info: null, error: '' };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error: error, info: info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const { error, info } = this.state;
      console.log(info);
      return (
        <div style={{ marginLeft: '1rem', textAlign: 'center' }}>
          <h2>We have run into a problem:</h2>
          <h3>Error: {error.toString()}</h3>
          {info && info.componentStack ?
            <h3>Trace:<pre>{info.componentStack.toString()}</pre></h3> : null}
        </div>
      );
    }
    return this.props.children;
  }
}
