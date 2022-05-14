/*
 * @Author: whj0117
 * @Date: 2022-05-14 21:52:33
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */

import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class App extends Component {
    componentDidMount() {
        new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    render() {
        return (
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {
                            this.props.children
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
