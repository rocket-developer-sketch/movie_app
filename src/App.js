import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
// HashRouter 를 사용하면 url /#/ 이 붙음. BrowserRouter 은 붙지 않는 다는 차이점이 있음
// Browser Router는 github pages에 올리기 까다로움

/* 라우터 역할 js */
/// <Route> : 렌더링할 스크린 과 무엇을 해야할 지 정해주기
//  <Route path="/about/" component={About} />
// 동작: 매치 되는 url 들을 찾아 할 일을 함.
// 그래서 1개 이상 매치 될 수 있음
// 가령 /home 과 /home/introduction 있을 시,
// /home 에 매치가 2개 되기 때문에
// /home 에서 동작하는 것 + /introduction 에서 동작하는 것
// 2개의 component를 가지고 모두가 한 화면에 보여짐
// 해결 : exact = {true} 속성을 붙여주므로써 완전 동일한 path만 router 가 렌더링하도록 함

// link를 가진 component Navigation을 Route 밖으로 내놓으면 동작하지 않음!

// react router는 정의된 route에 기본적으로 전달되는 속성들이 있음
// 이를 이용하여, Link 에서 to 에 object를 실어 보내어 route 간에 서로 props 공유가 가능해짐
function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
  )
};

export default App;