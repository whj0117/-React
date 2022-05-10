/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:04:22
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Center from './maizuocomponents/Center'
import Tabbar from './maizuocomponents/Tabbar'
import Navbar from './maizuocomponents/Navbar'
import './css/02-maizuo.css'
export default class App extends Component {
    state = {
        index:0
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
                <Navbar event={()=>{
                    this.setState({
                        index:2
                    })
                }}/>
                <div className='content'>
                {
                    this.which()
                }
                </div>
                <Tabbar event={(index)=>{
                    this.setState({
                        index:index
                    })
                }}/>
            </div>
        )
    }
}
