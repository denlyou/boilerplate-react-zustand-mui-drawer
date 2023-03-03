import { Typography } from '@mui/material';

export default function AdminLinks() {
  const exCode = `const SubPage = React.lazy(() => import('./page/SubPage.jsx'));
<Suspense fallback={<div>Loading...</div>}><SubPage/></Suspense>`;

  return (
    <div>
      <Typography variant="h1">서브 페이지</Typography>
      <Typography>
        이 페이지는 React.lazy를 통해 비동기로 로딩되는 페이지입니다.
      </Typography>
      <pre style={ {
          border: "1px solid #eee",
          padding: "16px",
          fontSize: "10px",
          fontFamily: "monospace",
        } }>
          <code>{exCode}</code>
        </pre>
        <a
          href="https://reactjs.org/docs/code-splitting.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          더 많은 코드 분할 정보 보기
        </a>
    </div>
  );
};