import { createGlobalStyle } from 'styled-components';
import { constants, colors } from './styles/constants';

const GlobalStyle = createGlobalStyle`
${constants} ${colors}

html, body {
  font-size: 100%;
  line-height: 1;
	font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

* {
	margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html, body {
    font-size: 100%;
    line-height: 1;
		font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: inherit;
}
`;

