/*
 * @Author: whj0117
 * @Date: 2022-05-09 21:55:14
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
  state = {
    list: [],
    copyList:[]
  }
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=993140',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        list: res.data.data.cinemas,
        copyList:res.data.data.cinemas,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleChange = (evt) => {
    console.log(evt.target.value)
    let newList = this.state.copyList.filter(item => item.name.toUpperCase().includes(evt.target.value.toUpperCase()) || item.address.toUpperCase().includes(evt.target.value.toUpperCase()))
    this.setState({
      list:newList
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        {
          this.state.list.map(item => {
            return <div key={item.cinemaId}>
              影院名称：{item.name}
              <br />
              影院地址：{item.address}
            </div>
          })
        }
      </div>
    )
  }
}