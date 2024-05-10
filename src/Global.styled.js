import styled, { createGlobalStyle, css } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  color: #000000;
}
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Hover1 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover2 = css`
  &:hover {
    color: #33399b;
  }
`;

export const Hover3 = css`
  background-color: #33399b;
  color: #ffffff;
  a {
    color: #ffffff;
  }
`;

const orange = css`
  background-color: #ffe4c2;
  color: #ff6d00;
`;
const green = css`
  background-color: #b4fdd1;
  color: #06b16e;
`;

const purple = css`
  background-color: #e9d4ff;
  color: #9a48f1;
`;

export const gray = css`
  background: #94a6be;
  color: #ffffff;
`;

export const colorTheme = (color) => css`
  ${color === 'orange' && orange}
  ${color === 'green' && green}
  ${color === 'purple' && purple}
`;
