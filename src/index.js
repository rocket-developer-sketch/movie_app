import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
//<App /> : component == function that returns HTML
// component 가 작동하려면 <App /> 처럼 HTML 형태에있어야 REACT가 COMPONENT로 인식함
// REACT 만의 개념 : JSX : JAVASCRIPT + HTML

// react application 이 하나의 component 만을 rendering 해야하기 때문에 아래 소스는 실행 오류
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';
ReactDOM.render(<App /><Potato />, document.getElementById('root'));
*/

