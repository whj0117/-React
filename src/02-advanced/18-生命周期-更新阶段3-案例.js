/*
 * @Author: whj0117
 * @Date: 2022-05-12 22:24:51
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'

class Child extends Component {
    state = {
        title:''
    }
    // 父组件状态更新就会触发
    UNSAFE_componentWillReceiveProps(nextProps) {
        //this.porps.name 是老数据
        console.log('componentWillReceiveProps',nextProps)
        //最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
        //把属性转化成孩子自己的状态。
        this.setState({
            title:nextProps.name + '哈哈'
        })
    }
    render() {
        return <div>Child-{this.state.title}</div>
    }
}

export default class App extends Component {
    state = {
        name: 'a'
    }

    render() {
        return (
            <div>
                <Child name={this.state.name} />
                <button onClick={() => {
                    this.setState({
                        name: 'b'
                    })
                }}>click</button>
            </div>
        )
    }
}
