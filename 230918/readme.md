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