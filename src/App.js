import React from 'react'; //추가
import axios from 'axios';
import Movie from './Movie';
import './App.css';

/* 미래에 쓰고자 하는 state를 선언하는 건 필수가 아님
그렇기 때문에 setTimeout() 에서 setState({isLoading: false, book: true})
라고 사용해도 에러 발생하지 않음

javascript에서 data를 fetch 할 때, 
fetch를 사용하지만, 더 좋은 방법 중 하나로는 Axios 가 있다.
axios 동작 : 마치 fetch 위에 작은 layer. 땅콩 주의의 초콜릿 처럼.
axios 설치 : npm i axios

axios 가 느릴 수 있기 때문에 compoentDidMount 함수가 끝날 때 까지 약간 시간이 걸릴 수 있다고 
javascript에게 알려야 함

  앞에 async 붙이는 방법
  async componentDidMount() {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  } 

  getMovies() 함수에서 데이터를 get 요청 하여 받고, async, await하는 방법
  async : 비동기 할 것임을 알림. 기다려야 함을 알림
  await : 기다릴 대상

yts : 불법적으로 영화 업로드하여 api가 자주 변경 됨. 그래서 Nicolas 강사가 TYS proxy API를 만들었음
https://yts-proxy.nomadcoders1.now.sh/list_movies.json
(https://yts-proxy.now.sh/list_movies.json)

API : yts.lt/api 접속 > API Endpoints 의 List moives
json view extension (보기편하게 json 형식 갖춰 보여줌)
*/
class App extends React.Component{
  state = {
    isLoading: true,
    moives: []
  };

  getMovies = async() => {
    const {data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render () {
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> 
    ) : (
      <div className="movies">
        { movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
      </div>
      )}
    </section>
    );
  }
}

export default App;

/*
const {isLoading, movies} = this.state;
state 에 있는 isLoading 과 movie에 접근
*/

/* Invalid DOM property `class`. Did you mean `className`? 에러 
  react 는 javascript로 작성된 class를 찾는 데 
  "javascript내의"  html에 class키워드가 있어 혼란
  해결 : javascript내의 html class 키워드 -> className 으로 입력

  다른 예시:
  <label for> 여기서 for는 javascript에서 반복문 키워드이기 때문에 react의 혼란이 옴
  <label htmlFor> 라고  입력
*/

/*
github pages에 올리기
ph-pages github에 업로드하는 것을 허가해주는 모듈
ph-pages 는 github의 github page 도메인에 내가 만든 웹사이트가 나타나도록 해줌
ph-pages설치 : npm i ph-pages
동작: github에서 project이름을 가져옴
(git remote -v 로 project이름 확인가능)

package.json 에서
  homepage 를 새로 만들어 추가해주어야 함
  가장 아래 줄에
    "homepage": "https://user name.github.io/project이름"

  "scripts" 에 
  "deploy" : "gh-pages " 추가 후 
  ctrl+c 로 서버 내린 후
  npm run build 명령어 입력
  biuild 라는 폴더가 생긴 것이 확인 가능

  다시
  "deploy" : "gh-pages -d build"
  여기서 build 는 npm run build 후 생긴 폴더명이며, 동일한 폴더명을 적어주어야 함!

   "scripts" 에 
  "predeploy" : "npm run build"  추가

  every time we call deploy, npm calls predeploy first
  predeploy do npm run build and build calls build script(react-scripts build)
  and that script will give a folder names build

  that is the end of predeploy

  after that, 
  deploy calls gh-pages and upload the folder, build

인터넷 웹에서 접근 : 주소창에 https://user name.github.io/project이름



*/