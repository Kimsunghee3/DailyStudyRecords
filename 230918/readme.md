### redux
설치방법
```sh
npm install --save redux
```

01. store를 만든다, store를 만들게 되면 내부에 자동으로 state가 생성된다.
02. reducer 함수를 만들어 store에 주입해준다.

### createStore API
redux를 설치하게 되면 createStore API를 사용할 수 있게 되는데, 
createStore()의 입력 값으로는 reducer가 들어가야한다.
```js
function reducer(){

}
Redux.createStore(reducer)
```

### reducer의 역할 
dispatch에 의해서 action이 들어오게 되면, reducer가 action값과 기존에 있던 state값을 참조해서 새로운 state 값을 만들어준다.

은행에 비유하면 dispatch를 창구직원 reducer가 서기(은행장부에 기록해주는 사람), state는 해당 장부라고 생각할 수 있다.


### reducer의 기본형태
```js
// reducer는 인자로 state와 action을 받기 때문에 인자로 두가지를 받도록 약속되어있다.
function reducer(state, action){

}
Redux.createStore(reducer)
```

store를 처음 만들때 store의 state 값의 초기 값이 필요한데 

### 정리
store를 만들면 내부적으로 state값이 생기고, state값을 가져올 때는 getState를 사용해야한다. 
reducer를 통해서 state값을 만들어주어야하는데 reducer의 기존 state 값이 undefined이면 
초기화를 위해서 최초로 실행되는 reducer에 대한 호출이므로 원하는 초기 값을 return 해주면, 
redux의 store에는 해당 초기값이 지정이 된다.

### state값 변경시키기 
state를 변경시키기 위해서는 action을 만들고, dispatch에게 제출하면 dispatch가 reducer를 호출하는데
이전의 state값과 action의 값을 동시에 준다.
reducer함수가 이 값들을 분석해서, state에 최종적인 값을 return해주게 된다.

### dispatch
store의 dispatch를 호출하게 되면 dispatch는 store를 생성할 때 제공한 reducer함수를 
호출하도록 약속되어있다. 이전의 state값과 전달된 action의 값을 인자로 준다

```js
// 중괄호부분이 액션이다.
store.dispatch({type:'CHANGE_COLOR', color:'red'})
```