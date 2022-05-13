/*
 * @Author: whj0117
 * @Date: 2022-05-13 22:21:27
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state = {
        myname: '小明'
    }

    componentDidUpdate() { console.log('componentDidUpdate') }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: '小明1'
                    })
                }}>click</button>
                {this.state.myname}
            </div>
        )
    }
}
