import React from "react";

class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    alert("Add to LOG file" + error);
  }

  render() {
    if (this.state.hasError) {
      return <h1 data-testid="error-message">Something is wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;