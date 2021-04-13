import React from 'react' //추가
import PropTypes from "prop-types"

/* class는 return 대신 render method가 있음 */
/* function compoennt 와 class component 차이점
  function은 무언가를 return하고 screen에 표시됨.
  class component는 class지만 react component로 부터 확장되고 screen에 표시 됨
  react 는 자동으로 render method 실행 함
  react는 reder를 refresh 해 주지 않음. 

  매번 state의 상태를 변경할 때 react가 reder function을 호출하여 refresh 해주려면
  this.state.count 대신 this.setState({count:1})하면, react는 state를 refresh하고 또한 render function을 호출하도록 사용


  class는 state 를 가지고 있고, state 는 object임.
  state object는 component의 data를 넣을 공간이 있고 이 데이터는 변할 수 있음
  바꿀 데이터는 state 안에 넣음
*/
class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    this.setState({ count: 1 });
  };
  
  minus = () => {
    this.setState({ count: -1 });
  };

  render () {
    return ( 
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;

/*
 <button onClick={this.add}>Add</button>
onClick 은 react 문법
{this.add()} 라고 부르지 않음. ()를 붙으면 그 즉시 호출 하라는 의미임
this.add라고 부름
 */