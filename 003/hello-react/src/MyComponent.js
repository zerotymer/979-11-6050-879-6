import React from 'react';
import PROPTYPES from 'prop-types';

class MyComponent extends React.Component {
  
  static defaultProps = {
    name: '기본 이름'
  };
  static propTypes = {
    name: PROPTYPES.string,
    favoriteNumber: PROPTYPES.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
};

export default MyComponent;