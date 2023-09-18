### fetch
1. server 폴더에 npm init 명령어로 package.json을 생성해준다.
2. express 사용을 위해 npm i express 로 설치해준다.
3. app.js 파일을 생성 후 코드를 선언해보자
4. node app.js 로 실행시켜보자

### 서버에 데이터를 요청할때
fetch: 기본제공하는 api
axios: 라이브러리

## 프론트에서 서버에 데이터 요청을 하려면 ?
프론트에서 서버에 데이터 요청을 하려면 서버주소와 http메소드만 있으면된다.

### CORS(Cross Origin Resource Sharing) 교차 출처 리소스 공유
client: localhost:3000(리액트 개발서버)
server: localhost:4000

client와 server는 현재 origin이 다르다  
현재 client와 server는 localhost는 같지만 port가 다르기 때문에 출처가 다르다.
* origin: host와 port를 포함한 데이터 출처를 의미

port만 다르다고 데이터를 막 꺼내서 사용해도 될까?
아래의 예시를 참고해보자

naver.com, google.com 이 있다고 가정해보자 naver.com와 google.com은 도메인이 다르다.
여기서는 막 꺼내서 사용해야된다는 부분을 여기에 적용하면 말이 안되는 사실일 것이다.
따라서 오리진이 다르면 무조건 막도록 정책이 설계되어있는 것이다.

### 도메인


### CORS로 막아버린 정책은 client, server 둘중 누가 풀어줄까?
데이터를 줄지 말지에 대한 여부는 server가 정한다.
따라서 서버에서 cors 정책을 허용해야한다.

### CORS 정책을 쉽게 해주는 라이브러리
cors를 사용하기 위해 라이브러리를 설치해주어야한다. npm install cors
```js
// cors를 사용하기 위해 import 한다.
const cors = require('cors')

app.use(cors())
```

### 서버로 부터 받은 데이터 화면에 띄우기
```js
import { useState } from "react"
const [todoList, setTodoList] = useState(null)
```


```js
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(null)
  fetch('http://localhost:4000/api/todo')
    .then((response) => response.json())
    .then((data) => setTodoList(data))

    return(
      <div className="App">
        <h1>TODO LIST</h1>
      </div>
    );
}

export default App;

```
위의 코드 같은 경우 fetch에서 데이터 요청에 대한 부분이 리렌더링되면서 무한루프가 돌게된다
리액트에서는 데이터가 바뀌면 바뀌부분만 다시 실행시키기 때문에 무한루프가 돌게된다.
* 리렌더링: 코드를 다시 실행시킴


### useEffect 코드가 한번만 실행되고 끝날 수 있도록 사용해준다.
```js
function App() {
  const [todoList, setTodoList] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:4000/api/todo')
      .then((response) => response.json())
      .then((data) => setTodoList(data))
  }, [])

    return(
      <div className="App">
        <h1>TODO LIST</h1>
        {todoList.map((todo)=>(
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done}</div>
        ))}
      </div>
    );
}
```

### uncaught typeError: cannot read properties of null(reading 'map')
map 함수를 호출하려고 할 때 todoList가 null인 상태에서 발생한다.
이는 초기 상태로 null을 설정하고 있다가 나중에 데이터가 로드되어야 하는데, 초기 렌더링시 map함수로 인해
null에 접근하려고 하기 때문에 발생하는 문제이다.

이 오류를 해결하려면 todoList가 초기에 null이 아닌 빈 배열로 초기화되도록 변경해야한다.
초기 렌더링시 map함수가 빈 배열에 대해 실행되어 오류를 방지할 수 있다.

```js
// ❌ const [todoList, setTodoList] = useState([])
 const [todoList, setTodoList] = useState([]);
```

### Axios
설치방법
```sh
npm i axios 
```

### 자주 사용하는 코드들은 커스텀 훅(use Query, use Fetch)으로 뺄 수 있다.
react-query 라이브러리 를 사용하면 데이터를 더 쉽게 가져올 수 있다.

### 에러처리 

### 로딩 중
