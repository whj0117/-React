/*
 * @Author: whj0117
 * @Date: 2022-05-13 21:17:19
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname:'zhangsan'
    }
    static getDerivedStateFromProps(nextProps,nextState){
        console.log('getDerivedStateFromProps')
        return {
            myname:nextState.myname.toUpperCase()
        }
    }
  render() {
    return (
      <div>
          <button onClick={()=>{
              this.setState({
                  myname:'xiaoming'
              })
          }}>click</button>
          {this.state.myname}
      </div>
    )
  }
}
