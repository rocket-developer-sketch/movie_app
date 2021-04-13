import React from 'react'; //추가
import axios from 'axios';
import Movie from './Movie';

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
    <section class="container">
      {isLoading ? (
      <div class="loader">
        <span class="loader_text">Loading...</span>
      </div> 
    ) : (
      <div class="movies">
        { movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
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
