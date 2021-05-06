import React from 'react';
import './banner1.scss';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Banner1 extends React.Component {
  render() {
      return <div class="banner-field">
            <div class="banner1">
               <img class="img-responsive" src={images["banner1.png"]["default"]} />
            </div>
          </div>
  }
}

export default Banner1;