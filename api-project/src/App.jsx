import {useState, useEffect} from "react";
import axios from "axios";

const App = () => {

  const [posts,setPosts] = useState([]);

  //useEffect: 데이터를 가져오는 네트워크 요청을 함.
  useEffect(() => {
    //
    const fetchData = async () => {
        // axios({
        //     method: 'GET',
        //     url: 'https://jsonplaceholder.typicode.com/photos',
        // }).then(response => setPosts(response.data))
        //api 통신이 끝나면 response의 data를 가져와라

        // axios.get('https://jsonplaceholder.typicode.com/photos')
        //     .then(response => setPosts(response.data)) //then: 비동기 통신

      try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
          setPosts(response.data);
      } catch(error) {
          console.log(error)
      }
    }
      fetchData();

    }, []);

  //<async, await>, axios구글링!!!!
  //async: 함수 앞에 붙이면, "이 함수는 비동기적인 함수이고, promise를 반환한다" 라고 선언하는 것
  //await: async함수 안에만 사용할 수 있는 특별한 문법. promise를 반환하는 함수 앞에 await을 붙이면, 해당 promise의 상태가 바뀔 때까지 코드가 기다림. 여기서는 axios.get 요청이 완료될 때까지 기다림. 
  //axios: get으로 주어진 url로 get요청을 보내 데이터를 가져옴. 그리고 response에 결과를 저장함.
  return (
    <ul>
      {posts.map(post => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div><img src={post.thumbnailUrl}/></div>
            
          </li>
      ))}
    </ul>
  )
}

export default App
