/*
 * @Author: whj0117
 * @Date: 2022-05-10 12:46:37
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
          {/* 类组件 */}
          <Navbar title="首页"/>
          {/* 函数式组件 */}
          <Sidebar bg="yellow" position="right"/>
      </div>
    )
  }
}
