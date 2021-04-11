import React from 'react' //추가

/*
function Food(props)
property 가 object로 넘어와서 console에는 fav = "kimchi" 라고 적힘
function Food({fav}) {}
{프로퍼티} 라고 써주면 프로퍼티 안의 값을 바로 가져올 수 있음
*/

function Food({fav}) {
  return <h1>I Love {fav}</h1>
}

// component 는 대문자로 시작해야 한다.
// jsx : component 에 정보를 보낼 수 있다
// 그렇기 때문에 react는 재사용 가능한 component 를 계속 만들 수 있다.
// component에서 component로 children component로 정보를 보내는 방법!
// app component 에서 food component로 정보 보내는 법
// <Food name = "kimchi"/> = > gave food component a property(prop) a name with kimchi
// <Food name = "kimchi" something = {true} papapapapa = {["hello", 1,2,3,4, true]}/> 

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi"/> 
      <Food fav="ramen"/> 
      <Food fav="samgiopsal"/> 
      <Food fav="chukumi"/> 
    </div>
  );
}

export default App;
