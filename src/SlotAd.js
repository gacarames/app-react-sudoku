import React, { Component } from 'react';
import adImg from "./img/ad.png";

export default class SlotAd extends Component {
    render() {
        return (
            <div className="ad-slot col-12 mt-2 mb-5">
                <div className="ad-slot-wrapper d-flex justify-content-center">
                  <div className="add-box">
                    <img src={adImg} alt="" />
                  </div>
                </div>
              </div>
        )
    }
}
