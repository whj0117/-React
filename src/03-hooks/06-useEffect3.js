/*
 * @Author: whj0117
 * @Date: 2022-05-22 23:43:11
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */

// useEffect和useLayoutEffect有什么区别？
// 简单来说就是调用时机不同，useLayoutEffect和原来componentDidMount & componentDidUpdate一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而useEffect是会在整个页面渲染完成才会调用的代码。
// 官方建议优先用useEffect
// 在实际使用时如果想避免页面抖动（在useEffect里修改DOM很有可能出现）的话，可以需要操作DOM的代码放在useLayoutEffect里。在这里做点dom操作，这些dom修改会和react做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价。
import React, { Component, useEffect } from 'react'

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
