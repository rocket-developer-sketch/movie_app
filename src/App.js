import React from 'react' //추가

// component에서 component로 children component로 정보를 보내는 방법!
// app component 에서 food component로 정보 보내는 법
// <Food name = "kimchi"/> = > gave food component a property(prop) a name with kimchi
// <Food name = "kimchi" something = {true} papapapapa = {["hello", 1,2,3,4, true]}/> 

// 동적으로 데이터 rendering하기
/*
{foodILike.map(dish => <Food />)} = foodILike 가 렌더링된 데이터라고 하고, 데이터 하나씩 Food Componant 로 보내줘야함
{foodILike.map(dish => <Food name={dish.name} />)}
dish 는 foodILike 객체를 가르킴
Food name = {dish.name} 의 name은 Food 에 전달할 이름, dish.name 은 foodILike 안의 프로퍼티 값

Each child in a list should have a unique "key" prop.
REACT는 LIST에 요소들를 집어넣으면 UNIQUE 함이 사라짐. react에서는 unique해야 함. 그렇기 때문에 각 요소에 ID 값을 줘야함

*/

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : 
      "https://img.kr.news.samsung.com/kr/wp-content/uploads/2016/10/33-1.jpg"
  },
  {
    id : 2,
    name : "Samyeopsal",
    image : 
      "https://t.pimg.jp/063/579/103/5/63579103.jpg"
  },
  {
    id : 3,
    name : "Bibimbap",
    image : 
      "https://i.pinimg.com/736x/27/43/fe/2743fe4909e5e427d2499edd783041bf.jpg"
  },
  {
    id : 4,
    name : "Doncasu",
    image : 
      "https://en.pimg.jp/062/803/014/1/62803014.jpg"
  },
  {
    id : 5,
    name : "Kimbab",
    image : 
      "https://en.pimg.jp/041/127/440/1/41127440.jpg"
  }
];

/*
문자를 {} 안에 쓰면 javascript
그냥 쓰면 text
*/


/*
function Food(props)
property 가 object로 넘어와서 console에는 fav = "kimchi" 라고 적힘
function Food({fav}) {}
{프로퍼티} 라고 써주면 프로퍼티 안의 값을 바로 가져올 수 있음
*/

function Food({ name, picture }) {
  return (
  <div>
    <h2>I Love {name} </h2>
    <img src={picture} alt={name}/>
  </div>
  )
}


/*{foodILike.map(renderFood)}
  각 item 별로 함수 renderFood 호출
*/
function renderFood(dish){
  return <Food key= {dish.id} name={dish.name} picture={dish.image}/>
}


function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {console.log(foodILike.map(dish => (
        <Food key= {dish.id} name={dish.name} picture={dish.image}/>
      )))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;


// ES6
/*
map : array 에서 array 만들기
friends.map(function (current) {console.log(current); return 0})
friends.map(current => {console.log(current); return 0})
*/