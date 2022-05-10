/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:07:57
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class Tabbar extends Component {
    state = {
        index: 0,
        list: [
            {
                id: 1,
                text: '电影'
            },
            {
                id: 2,
                text: '影院'
            },
            {
                id: 3,
                text: '我的'
            }
        ]
    }
    handleChange(index) {
        this.setState({
            index: index
        })
        this.props.event(index)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li onClick={() => this.handleChange(index)} className={index === this.state.index ? 'active' : ''} key={item.id}>
                                {item.text}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
