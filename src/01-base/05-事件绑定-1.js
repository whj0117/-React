/*
 * @Author: whj0117
 * @Date: 2022-05-06 21:50:35
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    handleClick2() {
        console.log('click2',this)
    }

    handleClick3 = () => {
        console.log('click3',this)
    }

    handleClick4 = () => {
        console.log('click4')
    }
    render() {
        return (
            <div>
                <input />
                <button onClick={
                    () => {
                        console.log('click1')
                    }
                }>add1</button>
                <button onClick={
                    this.handleClick2
                }>add2</button>
                <button onClick={
                    this.handleClick3
                }>add3</button>
                 <button onClick={
                    ()=>{this.handleClick4()}
                }>add4</button>
            </div>
        )
    }
}
