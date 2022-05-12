/*
 * @Author: whj0117
 * @Date: 2022-05-12 20:25:31
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: '小明'
    }

    componentDidUpdate() { console.log('componentDidUpdate') }

    shouldComponentUpdate(nextProps,nextState){
        //return true 应该更新
        //return false 阻止更新
        console.log(nextProps,nextState)
        return !(nextState.myname === this.state.myname)

        //或者
        // if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
        //     return true
        // }

        // return false
    }

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
