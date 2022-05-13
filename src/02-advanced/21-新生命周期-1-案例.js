/*
 * @Author: whj0117
 * @Date: 2022-05-13 21:29:49
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'
import axios from 'axios'
class Child extends Component {
    state = {
        type: 1,
        list: []
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1081784',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            this.setState({
                list: res.data.data.films
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        if (this.state.type === prevState.type) {
            return false
        }
        if (this.state.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1081784',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1777087',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    // 父组件状态更新就会触发
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps')
        return {
            type: nextProps.type
        }
    }
    render() {
        return <div>
            <ul>
                {this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)}
            </ul>
        </div>
    }
}

export default class App extends Component {
    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将上映</li>
                </ul>
                <Child type={this.state.type} />
            </div>
        )
    }
}
