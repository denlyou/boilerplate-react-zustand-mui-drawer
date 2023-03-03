# SBJang React App Boilerplate

이 소스는 개인용 리액트 앱 개발시 초기 코드로 사용할 목적으로 만들어 두었습니다.

## 구성 요약 

- CRA 기본 옵션으로 생성
  - "react": "^18.2.0"
  - "react-dom": "^18.2.0"

- 리액트 라우터
  - "react-router-dom": "^6.8.1",

- 상태관리 zustand
  - "zustand": "^4.3.3"

- MUI와 머터리얼 아이콘 포함
  - "@mui/material": "^5.11.8",
  - "@mui/icons-material": "^5.11.0",

### React &amp; CRA (Create React App) 

- https://create-react-app.dev
- https://github.com/facebook/create-react-app

```
yarn create react-app react-app
```

#### test 모듈 및 코드 제거

#### 디렉토르 구조 변경

#### `.eslintrc` 린트 수정
- "react-hooks/exhaustive-deps": "off"
  - uesEffect 등에서 wran 떠서...

### MUI(Material UI) 설정

- https://mui.com/

```
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material
```

Drawer 예제이 있는 컴포넌트를 여러 파일로 분리

### React Router

- https://reactrouter.com/

```
yarn add react-router-dom localforage match-sorter sort-by
```

페이지별 url 주소를 나누기 위해 사용

### zustand 상태관리

- https://github.com/pmndrs/zustand

```
yarn add zustand
```

상태관리 라이브러리로 zustand 추가