import React from 'react';
import './header.scss';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Head extends React.Component {
  render() {
      return <div class="header">
          <div class="logo">
            <img class="img-responsive" src={images["hospital-logo.png"]["default"]} />
          </div>
          <div class="programme">
            <p>Referral Programme | Record & Stats | Settings</p>
          </div>
          <div class="userimg">
            <img class="img-responsive" src={images["user.png"]["default"]} />
          </div>
      </div>
  }
}

export default Head;