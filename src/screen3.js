import React from 'react';
import './screen3.scss';
import $ from "jquery";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class Screen3 extends React.Component {
  render() {
    return <div class="screen3">
      <div class="opacity"></div>
      <content>
        <div class="closebtn" onClick={this.showScreen}>
          <img class="img-responsive" src={images["closeframe.png"]["default"]} />
        </div>
        <div class="heading">
          <p>Please Add Case Details</p>
        </div>
        <div class="leftPanel">
          <div>
            <input type="text" class="inputField" placeholder="Case Topic*"></input>
            <input type="text" class="inputField" placeholder="Contact Number of Patient"></input>
            <input type="text" class="inputField" placeholder="Case Condition or Urgency"></input>
            <textarea class="textField" placeholder="Please Write the Case Details for reference"></textarea>
          </div>
        </div>
        <div class="rightPanel">
          <form>
            <div class="name">
              <input type="text" class="nameField" placeholder="Patient Full Name*"></input>
            </div>
            <div class="gender">
              <input type="radio" id="male" name="gender" value="male"></input>
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female"></input>
              <label for="female">Female</label>
              <input type="radio" id="other" name="gender" value="other"></input>
              <label for="other">Others</label>
            </div>
            <div class="age">
              <input type="text" class="ageField" placeholder="Age"></input>
            </div>
          </form>
          <div class="upload_btn">
            <button type="submit">Upload Prescription</button>
            <button type="submit">Upload Case Reports</button>
          </div>
        </div>
        <div class="btn">
          <button type="submit">Request for Discussion / Referral</button>
        </div>
      </content>
      </div>
  }
  

  showScreen() {
    $(".screen2 content .options ul li").removeClass("active");
    $(".screen1 .hospital-list ul li").removeClass("active");
    $(".screen1 .btn button").attr("disabled",true);
    $("button").attr("disabled");
    $(".screen3").hide();
    $(".screen1").show();
  }
}

export default Screen3;