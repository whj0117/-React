/*
 * @Author: whj0117
 * @Date: 2022-05-14 20:35:30
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import Swiper,{Navigation,Pagination} from 'swiper'
import 'swiper/css'

Swiper.use([Navigation,Pagination])

export default class App extends Component {
    state = {
        list: ['111', '222', '333']
    }
    componentDidMount() {
        new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        return (
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item => <div className='swiper-slide' key={item}>{item}</div>)
                        }
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        )
    }
}
