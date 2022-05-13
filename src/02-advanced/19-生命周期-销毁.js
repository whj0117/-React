/*
 * @Author: whj0117
 * @Date: 2022-05-13 21:05:02
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Child extends Component {
    componentDidMount() {
        window.onresize = () => {
            console.log('onresize')
        }
        this.timer = setInterval(()=>{
            console.log('setInterval')
        },1000)
    }
    componentWillUnmount(){
        window.onresize = null;
        this.timer && clearInterval(this.timer)
    }
    render() {
        return <div>
            Child
        </div>
    }
}

export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }}>click</button>
                {this.state.isShow && <Child />}
            </div>
        )
    }
}
