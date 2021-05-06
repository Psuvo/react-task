import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Head from './header.js';
import Banner1 from './banner1.js';
import Screen1 from './screen1.js';
import Screen2 from './screen2.js';
import Screen3 from './screen3.js';
import Banner2 from './banner2.js';


class Page1 extends React.Component {
  render() {
    console.log('render of index')
    return <div class="main">
      <Head />
      <Banner1 />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Banner2 />
      </div>
  }
}


ReactDOM.render(
  <Page1 />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
