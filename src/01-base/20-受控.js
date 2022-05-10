/*
 * @Author: whj0117
 * @Date: 2022-05-10 16:28:45
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username:''
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" value={this.state.username} onChange={(evt)=>{
                    this.setState({
                        username:evt.target.value
                    })
                }}/>
                <button onClick={() => {
                    console.log(this.state.username)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        username:''
                    })
                }}>重置</button>
            </div>
        )
    }
}
