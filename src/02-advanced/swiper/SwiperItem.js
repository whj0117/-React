/*
 * @Author: whj0117
 * @Date: 2022-05-14 22:06:38
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class SwiperItem extends Component {
    render() {
        return (
            <div className='swiper-slide'>
                {this.props.children}
            </div>
        )
    }
}
