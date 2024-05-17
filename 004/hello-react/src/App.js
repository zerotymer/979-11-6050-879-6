import React from "react";
import ScrollBox from "./ScrollBox";

class App extends React.Component {

  render() {
    return (
      <div>
        <ScrollBox ref={ (ref) => this.scrollBox = ref }/>;
        <button onClick={ () => this.scrollBox.scrollToBottom() }>맨 밑으로</button>
      </div>
    );
  }
}

export default App;