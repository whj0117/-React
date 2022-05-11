/*
 * @Author: whj0117
 * @Date: 2022-05-11 22:44:12
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'
export default class App extends Component {
    state = {
        name: 'whj',
        list: []
    }

    componentDidMount() {
        axios.get('/test.json').then(res => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.films
            })
        })
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate', document.getElementById('myName').innerHTML)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', document.getElementById('myName').innerHTML)
        console.log(prevProps, prevState)
        if(!prevState.list.length) new BScroll('#wrapper')
    }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: 'hhhhhh'
                    })
                }}>click</button>
                <span id='myName'>{this.state.name}</span>
                <div id='wrapper' style={{ overflow: 'hidden', height: '100px', backgroundColor: 'yellow' }}>
                    <ul>
                        {
                            this.state.list.map((item, index) =>
                                <li key={item.filmId}>
                                    {item.name}
                                    <button onClick={() => {
                                        let newList = [...this.state.list]
                                        newList.splice(index, 1)
                                        this.setState({
                                            list: newList
                                        })
                                    }}>del</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
