import { Component, ErrorInfo, ReactNode } from "react";
import { IErrorBoundaryProps } from "./IErrorBoundaryProps";
import { IErrorBoundaryState } from "./IErrorBoundaryState";

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state: IErrorBoundaryState = { hasError: false };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error.message);
    console.log(error.stack);
    console.log(errorInfo.componentStack);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    return (
      <>{this.state.hasError ? <p>Error occurred.</p> : this.props.children}</>
    );
  }
}
