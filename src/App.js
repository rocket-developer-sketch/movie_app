import React from 'react' //추가

/* 미래에 쓰고자 하는 state를 선언하는 건 필수가 아님
그렇기 때문에 setTimeout() 에서 setState({isLoading: false, book: true})
라고 사용해도 에러 발생하지 않음
*/
class App extends React.Component{
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render () {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
