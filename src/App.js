import React from 'react' //추가
import PropTypes from "prop-types"

/* class는 return 대신 render method가 있음 */
/* function compoennt 와 class component 차이점
  function은 무언가를 return하고 screen에 표시됨.
  class component는 class지만 react component로 부터 확장되고 screen에 표시 됨
  react 는 자동으로 render method 실행 함

  class는 state 를 가지고 있고, state 는 object임.
  state object는 component의 data를 넣을 공간이 있고 이 데이터는 변할 수 있음
  바꿀 데이터는 state 안에 넣음
*/
class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    console.log("function add");
  }
  minus = () => {
    console.log("function minus");
  }

  render (){
    return ( 
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button>Minus</button>
    </div>
    );
  }
}

export default App;

/*
 <button onClick={this.add}>Add</button>
onClick 은 react 문법
{this.add()} 라고 부르지 않음
this.add라고 부름
 */