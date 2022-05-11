/*
 * @Author: whj0117
 * @Date: 2022-05-11 21:55:20
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 * 
 * * 1、初始化阶段
 * UNSAFE_componentWillMount:render之前最后一次修改状态的机会
 * render:只能访问this.props和this.state，不允许修改状态和DOM输出
 * componentDidMount:成功render并渲染完成真实DOM之后触发，可以修改DOM
 * 
 * 2、运行中阶段
 * componentWillReceiveProps:父组件修改属性触发
 * shouldComponentUpdate:返回false会阻止render调用
 * componentWillUpdate:不能修改属性和状态
 * render:只能访问this.props和this.state，不允许修改状态和DOM输出
 * componentDidMount:成功render并渲染完成真实DOM之后触发，可以修改DOM
 * 
 * 3、销毁阶段
 * componentWillUnMount:在删除组件之前进行清理操作，比如计时器和事件监听
 */
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            name:'whj'
        }
        console.log('constructor',document.getElementById('myName'))
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount',document.getElementById('myName'))
        this.setState({
            name:'ym'
        })
    }

    componentDidMount() {
        console.log('componentDidMount',document.getElementById('myName'))
        //数据请求axios
        //订阅函数调用
        //setInterval
        //基于创建完的dom进行，初始化，例如BetterScroll
    }
    render() {
        console.log('render')
        return (
            <div>
                App
                <div id="myName">{this.state.name}</div>
            </div>
        )
    }
}

