import React from 'react';
import './screen1.scss';
import $ from "jquery";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Screen1 extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log('render of screen1')
      return <div class="screen1">
            <div class="heading">
              <div class="description">
                  <p>Select Hospital to Discuss the Case</p>
              </div>
              <div class="searchArea">
                <div class="searchimg">
                  <img class="img-responsive" src={images["search.png"]["default"]} />
                </div>
                <div class="inputArea">
                  <input type="text" placeholder="search by hospital name,location"></input>
                </div>
              </div>
            </div>
            <div class="hospital-list">
                <ul onClick={this.handleClick}>
                  <li>Apollo Hospital</li>
                  <li>Woodlands Hospital</li>
                  <li>AMRI</li>
                  <li>Bell Vue Clinic</li>
                  <li>Peerless Hospital</li>
                  <li>Fortis</li>
                  <li>Nightangle</li>
                  <li>Colombia Asia</li>
                  <li>R N Tageore Hospital</li>
                </ul>
            </div>
            <div class="btn">
              <button type="submit" onClick={this.showScreen} disabled={!this.state.selected}>Next to Proceed</button>
            </div>
      </div>
  }

  handleClick(event) {
    this.setState({selected:true})
    $(".screen1 .hospital-list ul li").removeClass("active");
    $(event.target).addClass("active");
    $("button").removeAttr("disabled");
  }

  showScreen() {
    console.log("screeen2")
    $(".screen2").show();
  }

}

export default Screen1;