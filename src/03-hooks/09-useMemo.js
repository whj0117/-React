/*
 * @Author: whj0117
 * @Date: 2022-05-24 23:01:37
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */

import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function Cinema() {
    const [text, settext] = useState('')
    const [list, setlist] = useState([])
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=993140',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            setlist(res.data.data.cinemas)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    let getCinameList = useMemo(()=>list.filter(item => item.name.toUpperCase().includes(text.toUpperCase()) || item.address.toUpperCase().includes(text.toUpperCase())),[list,text])
    return (
        <div>
                <input onChange={(evt) => {
                   settext(evt.target.value)
                }} value={text} />
                {
                    getCinameList.map(item => {
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


// export default class Cinema extends Component {
//     state = {
//         list: [],
//         text: ''
//     }
//     componentDidMount() {
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=993140',
//             headers: {
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650989033480911783100417","bc":"110100"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then(res => {
//             this.setState({
//                 list: res.data.data.cinemas
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }

//     getCinameList() {
//         return this.state.list.filter(item => item.name.toUpperCase().includes(this.state.text.toUpperCase()) || item.address.toUpperCase().includes(this.state.text.toUpperCase()))
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={(evt) => {
//                     this.setState({
//                         text: evt.target.value
//                     })
//                 }} value={this.state.text} />
//                 {
//                     this.getCinameList().map(item => {
//                         return <div key={item.cinemaId}>
//                             影院名称：{item.name}
//                             <br />
//                             影院地址：{item.address}
//                         </div>
//                     })
//                 }
//             </div>
//         )
//     }
// }