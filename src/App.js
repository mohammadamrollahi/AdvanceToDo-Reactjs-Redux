import React from 'react';
import ToDoTable from "./component/ToDoTable/ToDoTable"
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ToDoTable/>
    </div>
    </Provider>
  );
}

export default App;
