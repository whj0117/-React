/*
 * @Author: whj0117
 * @Date: 2022-05-07 22:03:33
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'

export default class App extends Component {
    a = '我是this.a'
    myRef = React.createRef()

    render() {
        return (
            <div>
                {/* <input ref="myText"/> */}
                {<input  ref={this.myRef}/>}
                <button onClick={
                    () => {
                        // console.log('click1',this.refs.myText)
                        console.log('click1',this.myRef.current.value)
                    }
                }>add1</button>
            </div>
        )
    }
}