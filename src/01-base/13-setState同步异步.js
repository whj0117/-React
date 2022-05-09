/*
 * @Author: whj0117
 * @Date: 2022-05-09 23:03:21
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    handelAdd() {
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log(this.state.count)
        })
        
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => this.handelAdd()}>+1</button>
            </div>
        )
    }
}

/*
    setState处在同步的逻辑中，异步更新状态，更新真实dom
    setState处在异步的逻辑中，同步更新状态，同步更新真是dom
    setState接受第二个参数，第二个参数是回调函数，状态和dom更新完成后就会被出发。
*/
