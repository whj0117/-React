/*
 * @Author: whj0117
 * @Date: 2022-05-11 22:32:55
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import BScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

    componentDidMount() {
        new BScroll('#wrapper')
    }
    render() {
        return (
            <div>
                <div id='wrapper' style={{ overflow: 'hidden', height: '100px', backgroundColor: 'yellow' }}>
                    <ul>
                        {
                            this.state.list.map(item => <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
