/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:14:07
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{overflow:'hidden',backgroundColor:'yellow',textAlign:'center'}}>
          <button onClick={()=>{
              this.props.event(0)
          }} style={{float:'left'}}>返回</button>
          <span>卖座电影</span>
          <button onClick={()=>{
              this.props.event(2)
          }} style={{float:'right'}}>我的</button>
      </div>
    )
  }
}
