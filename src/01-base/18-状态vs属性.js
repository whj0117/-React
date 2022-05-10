/*
 * @Author: whj0117
 * @Date: 2022-05-10 13:21:21
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Child extends Component {
    render() {
        return <div>
            <button onClick={() => {
                this.props.handle()
            }}>子-click</button>
            Child---{this.props.text}
        </div>
    }
}

export default class App extends Component {
    state = {
        text: 1
    }

    handleChange = () => {
        this.setState({
            text: ++this.state.text
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChange}>父-click</button>
                <Child text={this.state.text} handle={this.handleChange} />
            </div>
        )
    }
}
