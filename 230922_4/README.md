### react-redux
```sh
$ npm install redux react-redux
```

제일먼저 스토어를 생성해주자
```jsx
import {createStore} from "redux"
// 수정하면 안되므로 상수로 설정했다.
const store = createStore()
```