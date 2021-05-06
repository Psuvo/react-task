import React from 'react';
import './banner2.scss';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Banner2 extends React.Component {
  render() {
      return <div class="banner-field2">
            <div class="banner2">
               <img class="img-responsive" src={images["banner2.png"]["default"]} />
            </div>
          </div>
  }
}

export default Banner2;