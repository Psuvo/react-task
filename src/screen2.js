import React from 'react';
import './screen2.scss';
import $ from "jquery";


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class Screen2 extends React.Component {
  render() {
    console.log('render of screen2');
      return <div class="screen2">
            <div class="opacity"></div>
            <content>
              <div class="closebtn" onClick={this.showScreen}>
                  <img class="img-responsive" src={images["closeframe.png"]["default"]} />
              </div>
              <div class="heading">
                <p>Would you like to Discuss a Case with another<br />Organization for Better diagnosis or Refer!</p>
              </div>
              <div class="options" onClick={this.handleClick}>
                  <ul>
                      <li onClick={this.navigate}>Discuss Case</li>
                      <li onClick={this.navigate}>Refer Case</li>
                  </ul>
              </div>
            </content>
      </div>
    }
    
  handleClick(event) {
    $(".screen2 content .options ul li").removeClass("active");
    $(event.target).addClass("active");
  }

  showScreen() {
    $(".screen1 .hospital-list ul li").removeClass("active");
    $(".screen1 .btn button").attr("disabled",true);
    $(".screen2").hide();
    $(".screen1").show();
  }
  navigate() {
    $(".screen2").hide();
    $(".screen3").show();
  }
}

export default Screen2;