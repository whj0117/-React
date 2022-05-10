/*
 * @Author: whj0117
 * @Date: 2022-05-10 16:50:47
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    state = {
        list: [],
        myText: ''
    }

    handleChange = () => {
        let newList = [...this.state.list, {
            id: Math.random() * 1000000,
            myText: this.state.myText,
            ischecked:false
        }]
        this.setState({
            list: newList,
            myText: ''
        })
    }

    delChange(index) {
        let newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }

    isSure(index, bool) {
        let newList = [...this.state.list]
        newList[index].ischecked = bool
        this.setState({
            list: newList
        })
    }

    render() {
        return (
            <div>
                <input onChange={(evt) => {
                    this.setState({
                        myText: evt.target.value
                    })
                }} value={this.state.myText} />
                <button onClick={this.handleChange}>add</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={item.id} style={{ textDecoration: item.ischecked ? 'line-through' : '' }}>
                            {/* {item.myText} */}
                            <input type="checkbox" checked={item.ischecked} onChange={(evt) => this.isSure(index, evt.target.checked)} />
                            {/* 富文本展示 */}
                            <span dangerouslySetInnerHTML={
                                { __html: item.myText }
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