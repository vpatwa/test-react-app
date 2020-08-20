import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import ItemService from './components/ItemService';
import ServiceProvider from './components/ServiceProvider';
function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        {/* <HookItemService /> */}
        <ItemService />
        <ServiceProvider />
      </div>
    </Provider>
  );
}

export default App;
