import React from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends React.Component {
  state = {
    color: "#000000",
  };

  /// region Event Handlers
  handleClick = () => {
    console.log('App ------------------------');
    this.setState({ color: getRandomColor() });
  };
  /// endregion Event Handlers

  render() {
    const { handleClick } = this;
    const { color } = this.state;

    return (
      <div>
        <button onClick={ handleClick }>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={ color } />;
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;