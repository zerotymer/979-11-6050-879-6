import React from 'react';

class EventPractice extends React.Component {

  state = {
    message: ""
  };

  /// region Event Methods
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: "" });
  };
  /// endregion Event Methods


  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={ this.handleChange }
        />
        <button onClick={ this.handleClick }>확인</button>
      </div>
    );
  }
}

export default EventPractice;