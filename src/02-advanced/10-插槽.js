/*
 * @Author: whj0117
 * @Date: 2022-05-11 21:25:38
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Child extends Component{
    render(){
        console.log(this.props.children)
        return <div>
            {this.props.children}
            {this.props.children}
            {this.props.children}
        </div>
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
          <Child>
              <div>1111111</div>
              <div>2222222</div>
          </Child>
      </div>
    )
  }
}

/*
1、为了复用
2、一定程度减少父子通信
*/
