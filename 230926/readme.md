### vue 설치방법
```sh
$ npm install -g @vue/cli
```
-> 설치가 잘 안된다면 구글에 yarn 1.22를 검색 후 설치해보기

### vetur 확장프로그램 설치
vscode -  확장 프로그램 - vetur, html css surport, vue3 snippets

### vue create
```sh
$ vue create 폴더명
```

<template> 안에는 HTML짜고,
<script> 안에는 JS짜고,
<style> 안에는 CSS짜고


### 미리보기 띄우기
```sh
$ npm run serve
```

### node.js를 설치한 이유?
npm을 사용하고 싶어서 설치함
* npm: 각종 웹개발 라이브러리 설치 도구

npm으로 @vue/cli를 설치함
* vue/cli: vue프로젝트를 빠르게 생성해주는 라이브러리

### APP.Vue
App.Vue가 메인페이지이다.

웹 브라우저는 vue파일을 해석 할 수 없다.
### 그렇다면 브라우저가 해석할 수 있는 이유는?
App.vue에 있는 파일을 html로 빠꿔서 퍼블릭의 index.html에 넣어주기때문에(main.js가 처리해줌) 실제 웹사이트처럼 잘 동작하고 있다.

# node_modules
프로젝트에 쓰는 라이브러리들

# src
소스 코드를 다 담는 곳

# public
html파일, 기타파일 보관

# package.json
라이브러리 버전, 프로젝트 설정 기록

### 데이터 바인딩
js데이터를 html에 꽂아넣는 문법
사용하는 이유
- vue가 제공하는 실시간 자동렌더링 기능을 사용할 수 있다.
* 실시간 자동렌더링 기능: 데이터를 변경하면 data와 관련된 html에도 실시간으로 변경이 가능하다.(web-app을 만들때 용이하다.)
- html에 하드코딩으로 직접 데이터를 입력해줘도 되지만, 나중에 변경이 어려우므로 데이터 바인딩을 사용한다.
- 실시간으로 변경될 필요가 없는 데이터는 굳이 데이터 바인딩을 하지 않아도 된다.
- html 속성도 데이터 바인딩 가능
: 속성='데이터이름' 형식으로 사용해주어야한다.
```js
<div :style="데이터명"> </div>
```

```js
<script>
export default {
  name: 'App',
  data(){
    return {
      // 데이터 보관함
      // 데이터는object자료 형태로 저장
      {}
    }
  },
  components: {
  }
}
</script>
```

### 장점
- 반복적인 html요소들을 반복문으로 축약할 수 있다.


### vue의 html반복문
```js
<a v-for="이름 in 횟수" :key="이름"></a>
```
* key: 반복문을 사용할 때 꼭 서야함, 반복문 돌린 요소를 컴퓨터가 구분하기 위해 쓴다.