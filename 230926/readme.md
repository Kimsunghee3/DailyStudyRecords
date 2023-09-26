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