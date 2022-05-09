/*
 * @Author: whj0117
 * @Date: 2022-05-09 20:55:03
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    state = {
        list: []
    }
    myRef = React.createRef()

    handleChange = () => {
        let newList = [...this.state.list, {
            id: Math.random() * 1000000,
            myText: this.myRef.current.value
        }]
        this.setState({
            list: newList,
            text: ''
        })
        this.myRef.current.value = ''
    }

    delChange(index) {
        let newList = [...this.state.list]
        newList.splice(index,1)
        this.setState({
            list:newList
        })
    }

    render() {
        return (
            <div>
                {<input ref={this.myRef} />}
                <button onClick={this.handleChange}>add</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={item.id}>
                            {/* {item.myText} */}
                            {/* 富文本展示 */}
                            <span dangerouslySetInnerHTML={
                                {__html:item.myText}
                            }></span>
                            <button onClick={() => this.delChange(index)}>del</button>
                        </li>
                    })}
                </ul>
                {/* {!this.state.list.length && <div>暂无数据...</div>} */}
                {<div className={!this.state.list.length ? '' : 'hidden'}>暂无数据...</div>}
            </div>
        )
    }
}