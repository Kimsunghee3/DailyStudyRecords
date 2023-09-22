### Provider
react-redux 라이브러리에 내장되어있는, 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트(Redux나 Context API)와 함께 사용되는 중요한 컴포넌트 중 하나다.
Provider는 하위 컴포넌트에 상태나 데이터를 제공하는 역할을 한다.

Redux에서 Provider는 Redux 스토어를 리액트애플리케이션에 주입하는 역할을 한다.

Provider는 최상위 컴포넌트로 애플리케이션의 모든 컴포넌트에 스토어의 상태와 액션 디스패치 기능을 제공한다.

```js
import { Provider } from "react";
import store from "store"

function App() {
  return (
    <Provider store={store}>
        {/* 애플리케이션 내부 컴포넌트들 */}
    </Provider>
  );
}
```

### store
정보가 저장되는 곳
앱의 전체 상태 트리를 가지고 있는 저장소
이 안의 상태를 바꾸는 유일한 방법은 store에 액션을 보내는 것 뿐이다. 저장소는 클래스가 아니다. 몇가지 메서드가 들어있는 객체일뿐이다.

생성하기 위해서는 루트 리듀싱 함수를 createStore에 전달한다.

### configureStore
Redux라이브러리와 함께 주로 사용되는 함수로, Redux 스토어를 생성하는 역할을 한다.
Redux는 자바스크립트 애플리케이션의 상태 관리를 위한 라이브러리로, configureStore를 사용하여 redux스토어를 설정하고 초기화한다.

### createSlice
redux toolkit의 핵심 기능 중 하나로, 리듀서함수와 액션 생성자를 쉽게 생성하는데 사용되는 함수이다. redux toolkit은 redux를 사용할 수 있도록 도우며
createSlice는 반복적이고 번거로운 작업을 줄여주는 역할을 한다.

### useDispatch
react redux라이브러리에서 사용하는 훅 중 하나로, redux스토어에 액션을 디스패치하기 위해 사용된다.
redux 스토어에 저장된 상태를 변경하려면 액션을 디스패치 해야하며, useDispatch 훅을 사용하면 함수 컴포넌트 내에서 디스패치 함수를 사용할 수 있다.

### useSelector
react redux라이브러리에서 제공하는 훅 중 하나로, redux스토어에 저장된 상태를 react컴포넌트에서 조회하는 데 사용된다.

이 훅을 사용하면 redux스토어에 저장된 전역 상태를 컴포넌트에서 가져와 사용할 수 있다.
