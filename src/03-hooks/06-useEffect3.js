/*
 * @Author: whj0117
 * @Date: 2022-05-22 23:43:11
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */

import React, { Component, useEffect } from 'react'

// class Child extends Component {
//     componentDidMount() {
//         window.onresize = () => {
//             console.log('onresize')
//         }
//         this.timer = setInterval(()=>{
//             console.log('setInterval')
//         },1000)
//     }
//     componentWillUnmount(){
//         window.onresize = null;
//         this.timer && clearInterval(this.timer)
//     }
//     render() {
//         return <div>
//             Child
//         </div>
//     }
// }

function Child(){
    useEffect(()=>{
        window.onresize = () => {
            console.log('onresize')
        }
        let timer = setInterval(()=>{
            console.log('setInterval')
        },1000)
        return ()=>{
            console.log('组件销毁')
            window.onresize = null;
            clearInterval(timer)
        }
    },[])
    return <div>Child</div>
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
