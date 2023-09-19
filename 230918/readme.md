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

### redo, undo..?
immutavality 강의 듣기

```js
// state: store의 state값
function reducer(state, action){

}
```

### 객체를 복제하기
```js
// 첫번째 인자로 빈 객체, 두번째 인자 빈객체의 복제할 속성
object.assign({},{name:'sunghee'}, {city:'seoul'})
// 복사된 개체
{name:'sunghee', city: 'seoul'}
```

이전에는 아래와 같이 원본인 state를 직접 변경했는데
```js
function reducer(state, action){
    console.log("state:",state, "action: ",action)
    if(state === undefined){
        return {color: 'yellow'}
    }
    return state
}
```

지금은 state를 복제하고, 그 복제한 것의 color를 red로 준 결과를 return한다. 
그러면 reducer가 실행될 때 마다 return되는 값이 새로운 state값이 되고, 각각의 state 값들이
서로 완전히 독립된 복제된 결과들이 return된다. 
```js
function reducer(state, action){
    console.log("state:",state, "action: ",action)
    if(state === undefined){
        return {color: 'yellow'}
    }
    var newState
    if(action.type === 'CHANGE_COLOR'){
        newState = Object.assign({}, state, {color:'red'})
    }
    return newState
}
```

### reducer함수의 역할
store의 state값을 변경해준다.
action의 값과 이전의 state값을 이용해서 새로운 state값을 return해주면
그 return된 값이 새로운 state값이된다.
return하는 값은 원본을 바꾸는 것이 아닌 이전에 있었던 값을 복제한 결과를 return해야지만 
우리가 redux를 사용하는 효용들을 최대한으로 사용할 수 있다.


기존의 코드에서는 서로 강하게 의존하고 있어서 하나의 코드가 지워지면 나머지 코드
마저 사용할 수 없게 된다.

redux는 중앙 집중적으로 코드를 관리하게 되므로 각각의 부품들은 상태가 바꼈을때,
action을 store에 dispatch해주고 어떻게 변화해야하는지 store에 구독을 해놓으면 
그때마다 자신의 모양을 바꿀 수 있다.

### 리덕스를 사용하는 이유
리덕스를 사용하지 않고 코드를 짜게 되면 코드간의 의존성이 높아져 하나의 상태가 바뀌면 전부 다 수정을 해줘야한다.
리덕스를 사용하게 되면 하나의 상태가 바뀌어도 다른 코드를 수정할 필요가 없기에 자신이 해야할일만 하면 된다.
중앙에서store를 통해 state를 관리하여 서로간의 의존성을 줄인다.


### redux dev tools
사용법
개발자 도구로 redux를 열어주고 아래와 같이 설정해주자
```js
const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```
redux devtools를 사용하면 이전에 실행된 모습들을 되돌려볼 수 있다(time travel)

### action을 했을 때 그에 따른 상태를 보고싶다면?
redux는 모든 관리해야하는 상태들을 store(단일 store)에 담고 있다.
redux는 단 하나의 store를 유지하며, store는 reducer에 의해 가공된다.
application의 상태가 궁금하다면 reducer를 사용하면 된다.
```js
// state:이전 상태, newState: 새로운 상태
console.log(action.type, action, state, newState)
```
