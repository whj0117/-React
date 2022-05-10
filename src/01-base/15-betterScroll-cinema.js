/*
 * @Author: whj0117
 * @Date: 2022-05-10 10:15:26
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
import axios from 'axios'

export default class Cinema extends Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=993140',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            this.setState({
                list: res.data.data.cinemas
            })
            console.log(this.state.list)
            new BetterScroll('.betterScrollWrap')
        })
    }
    
    render() {
        return (
            <div>
                <div className='betterScrollWrap' style={{overflow:"hidden",height:'100%',backgroundColor:'yellow'}}>
                    <div className='betterScrollContent'>
                        {
                            this.state.list.map(item => 
                                <div key={item.cinemaId}>
                                    影院名称：{item.name}
                                    <br/>
                                    影院地址：{item.address}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}