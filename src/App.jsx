import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopExit from './components/popups/PopExit/PopExit';
import { tasks } from './data';
import { GlobalStyle, Wrapper } from './Global.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './ThemeStyle.styled';

function App() {
  const [data, setData] = useState(tasks);
  const [globalTheme, setGlobalTheme] = useState(true);

  console.log(data);
  return (
    <ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header
          globalTheme={globalTheme}
          setGlobalTheme={setGlobalTheme}
          data={data}
          setData={setData}
        />
        <Main data={data} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
