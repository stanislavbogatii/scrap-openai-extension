import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalStyles } from '@mui/material';
import * as S from './styled';
import { MainPage } from '#pages/Main';
import { useEffect, useState } from 'react';


function App() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    chrome.runtime.sendMessage({ action: 'getCurrentUrl' }, (response) => {
      if (response && response.url) {
        setUrl(response.url);
      }
    });
  }, []);
  return (
    <div className="App">
      <GlobalStyles styles={S.baseStyles}/>
      {url}
      {/* <MainPage/> */}
    </div>
  );
}

export default App;
