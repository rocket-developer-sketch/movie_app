import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
//<App /> : component == function that returns HTML
// component 가 작동하려면 <App /> 처럼 HTML 형태에있어야 REACT가 COMPONENT로 인식함
// component 는 대문자로 시작해야 한다.
// REACT 만의 개념 : JSX : JAVASCRIPT + HTML
// jsx는 component 에 정보를 보낼 수 있다
// 그렇기 때문에 react는 재사용 가능한 component 를 계속 만들 수 있다.
// jsx 쓰는 법 : 속성 = " "

// react application 이 하나의 component 만을 rendering 해야하기 때문에 아래 소스는 실행 오류
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';
ReactDOM.render(<App /><Potato />, document.getElementById('root'));
*/

