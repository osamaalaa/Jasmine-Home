import React, { useEffect } from 'react';
import Markup from './markup/markup';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App(props) {
  // const { store } = props
  useEffect(() => {
    props.hideLoader()
  }, [props])
  return (
   
    <div className="App">
          <I18nextProvider i18n={i18n}>

              <Markup />
          </I18nextProvider>
    </div>

    
  );
}

export default App;

