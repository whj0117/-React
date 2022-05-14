/*
 * @Author: whj0117
 * @Date: 2022-05-14 21:50:45
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import KSwiper from './swiper/Swiper'
import SwiperItem from './swiper/SwiperItem'
import axios from 'axios'
export default class App extends Component {
    state = {
        list:[]
    }

    componentDidMount() { 
        axios({
            url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3895221',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(res.data.data.films)
            this.setState({
                list:res.data.data.films
            })
        })
     }
  render() {
    return (
      <div>
          <KSwiper style={{height:'200px',backgroundColor:'yellow'}}>
              {
                  this.state.list.map(item=><SwiperItem key={item.filmId}>
                      <img style={{width:'200px'}} src={item.poster} alt={item.name}/>
                  </SwiperItem>)
              }
          </KSwiper>
      </div>
    )
  }
}
