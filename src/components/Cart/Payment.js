import QR from "./../../img/QR.png"
import React, { Component } from 'react'
import "./Payment.css"

export default class Payment extends Component {
  render() {
    return (
      <>
      <div className="Container">
      <img className="img" src={QR}  width={200}/>
      </div>
      </>
    )
  }
}
