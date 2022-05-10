/*
 * @Author: whj0117
 * @Date: 2022-05-10 21:58:01
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

let bus = {
    list:[],
    // 订阅者
    subscribe(callback){
        console.log(callback)
        this.list.push(callback)
    },
    // 发布者
    publish(text){
        this.list.forEach(cb=>{
            cb && cb(text)
        })
    }
}

bus.subscribe((value)=>{
    console.log(1,value)
})

bus.publish('哈哈')
