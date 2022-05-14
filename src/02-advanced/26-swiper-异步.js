/*
 * @Author: whj0117
 * @Date: 2022-05-14 20:56:52
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import Swiper,{Navigation,Pagination} from 'swiper'
import 'swiper/css/bundle'

Swiper.use([Navigation,Pagination])

export default class App extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                list:['111', '222', '333']
            },()=>{
                new Swiper('.swiper', {
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        },1000)
    }
    // 或者
    // componentDidUpdate(prevProps, prevState) { 
    //     new Swiper('.swiper', {
    //         // 如果需要分页器
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //     })
    // } 
    render() {
        return (
            <div>
                <div className="swiper" style={{height:'200px',backgroundColor:"yellow"}}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item => <div className='swiper-slide' key={item}>{item}</div>)
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
