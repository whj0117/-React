/*
 * @Author: whj0117
 * @Date: 2022-05-09 21:46:05
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Center from './maizuocomponents/Center'
import './css/02-maizuo.css'
export default class App extends Component {
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
    }

    which() {
        switch (this.state.index) {
            case 0:
                return <Film />
            case 1:
                return <Cinema />
            case 2:
                return <Center />
            default:
                return ''
        }
    }
    render() {
        return (
            <div>
                {/* {this.state.index === 0 && <Film />}
                {this.state.index === 1 && <Cinema />}
                {this.state.index === 2 && <Center />} */}
                <div className='content'>
                {
                    this.which()
                }
                </div>
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
