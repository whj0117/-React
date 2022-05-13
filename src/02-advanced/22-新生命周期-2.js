/*
 * @Author: whj0117
 * @Date: 2022-05-13 21:55:22
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: 1
    }
    componentDidUpdate(prevProps, prevState, value) {
        console.log('componentDidUpdate', value)
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return 100
    }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        text: 2
                    })
                }}>click</button>
                <div>{this.state.text}</div>
            </div>
        )
    }
}
