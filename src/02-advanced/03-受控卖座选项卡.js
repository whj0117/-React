/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:37:32
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import Film from './maizuocomponents2/Film'
import Cinema from './maizuocomponents2/Cinema'
import Center from './maizuocomponents2/Center'
import Tabbar from './maizuocomponents2/Tabbar'
import Navbar from './maizuocomponents2/Navbar'
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

    which() {
        switch (this.state.index) {
            case 0:
                return <Film />
            case 1:
                return <Cinema />
            case 2:
                return <Center />
            default:
                return null
        }
    }
    render() {
        return (
            <div>
                <Navbar event={(tabIndex)=>{
                    this.setState({
                        index:tabIndex
                    })
                }}/>
                <div className='content'>
                {
                    this.which()
                }
                </div>
                <Tabbar {...this.state} event={(index)=>{
                    this.setState({
                        index:index
                    })
                }}/>
            </div>
        )
    }
}
