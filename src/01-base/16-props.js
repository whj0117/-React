/*
 * @Author: whj0117
 * @Date: 2022-05-10 12:22:27
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import Navbar from './Navbar'
export default class App extends Component {
    render() {
        let obj = {
            title:'购物车'
        }
        return (
            <div>
                <div>
                    <h1>首页</h1>
                    <Navbar title="首页" leftShow={false} />
                </div>
                <div>
                    <h1>列表</h1>
                    <Navbar title="列表" />
                </div>
                <div>
                    <h1>购物车</h1>
                    <Navbar {...obj} />
                </div>
            </div>
        )
    }
}
