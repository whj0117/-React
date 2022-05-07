/*
 * @Author: whj0117
 * @Date: 2022-05-07 22:44:19
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list:['111','222','333']
    }
  render() {
    let newList = this.state.list.map(item=><li key={item}>{item}</li>)
    return (
      <div>
          <ul>
              {
                  // this.state.list.map(item=>{
                  //     return <li key={item}>{item}</li>
                  // })
                  newList
              }
          </ul>
      </div>
    )
  }
}
