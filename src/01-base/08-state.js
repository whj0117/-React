/*
 * @Author: whj0117
 * @Date: 2022-05-07 22:20:37
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    // 方法一
    constructor() {
        super()
        this.state = {
            text: "收藏",
            textBool: true
        }
    }
    // 方法二
    // state = {
    //     text:"收藏",
    //     textBool:true
    // }
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <button onClick={() => {
                    this.setState({
                        //   text:this.state.text === '收藏' ? '取消收藏' : '收藏'
                        textBool: !this.state.textBool
                    })
                }}>{this.state.textBool ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}