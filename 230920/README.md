### Redux toolkit
Redux(createStore, subscribe, getState, dispatch)
- 상태관리
- 프로그램이 동작하는데 필요한 데이터를 체계적으로 관리해준다. 
- Redux 자체는 react와는 무관하다.(javascript의 전역상태를 관리하기 위해서 사용하기 때문)

React Redux(connect, useDispatch, useSelector)
- 리액트에서 redux를 편하게 사용할 수 있는 툴

Redux toolkit(configureStore, createSlice, createAsyncThunk )
등장배경
- 설정해야할 것이 너무 많음, 미들웨어설치, 반복되는 코드, 불변성 유지의 어려움

### 설치방법
새로 생성할때
```sh
# --template redux: redux toolkit이 셋팅된 개발환경이 만들어짐
npx create-react-app my-app --template redux
```
이미 만들어진 파일에 만들고 도입하고 싶을때
```sh
npm install @reduxjs/toolkit
```

