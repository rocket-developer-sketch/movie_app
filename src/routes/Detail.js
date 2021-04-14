import React from 'react';

/* history 에서 go, goForward ... 등으로 url 변경할 수 있음*/
class Detail extends React.Component {
    componentDidMount(){
        //console.log(this.props);
        const {location, history} = this.props;
        if (location.state === undefined) { //url 창에 직접 주소를 치면, state가 undefined로 나오기 때문에 해주는 처리
            history.push("/");
        }
    }

    render() {
        const {location} = this.props;

        // url 직접 치고 들어왔을 떄의 처리
        // render () -> componentDidMount() 순으로 동작하기 때문에
        // 직접 치고 왔을 때, render 에서 아무것도 보여지지 않도록 return null 해주고,
        // componentDidMount() 로 가서 "/" 로 redirect 를 해준다.
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;