import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import App from './App';
import store from './Store/store';

const theme = createMuiTheme();

ReactDOM.render(
<MuiThemeProvider theme={theme}>
   <BrowserRouter>
     <Provider store = {store}>
       <App />
     </Provider>
   </BrowserRouter>
</MuiThemeProvider>,
   document.getElementById('root')
 );
