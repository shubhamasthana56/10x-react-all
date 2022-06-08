import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Assignment from './component/assignment-1/assignment-1';
import Counter from './component/counter/counter';
import List from './component/list/list';
import Parent from './component/List1/list1';
import {MovieApp} from "./component/assignment-movie-app/movie/movie";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter/>
    
    <Assignment/> */}
    {/* <List/> */}
    {/* <Parent/> */}
    <MovieApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
