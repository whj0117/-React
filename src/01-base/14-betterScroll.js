/*
 * @Author: whj0117
 * @Date: 2022-05-10 10:01:50
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: []
    }
    getData() {
        let list = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        this.setState({
            list: list
        },()=>{
            new BetterScroll('.betterScrollWrap')
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className='betterScrollWrap' style={{overflow:'hidden',height:'200px',backgroundColor:'yellow'}}>
                    <ul>
                        {
                            this.state.list.map(item => {
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
