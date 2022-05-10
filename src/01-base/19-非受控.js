/*
 * @Author: whj0117
 * @Date: 2022-05-10 13:30:03
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    useName = React.createRef()
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input ref={this.useName} type="text" defaultValue="whj" />
                <button onClick={() => {
                    console.log(this.useName.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.useName.current.value = ''
                }}>重置</button>
                {/* <Child myValue={this.useName.current.value}/> */}
            </div>
        )
    }
}
