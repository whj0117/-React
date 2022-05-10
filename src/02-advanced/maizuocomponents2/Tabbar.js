/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:07:57
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

// export default class Tabbar extends Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.list.map((item, index) => {
//                             return <li onClick={() => this.props.event(index)} className={index === this.props.index ? 'active' : ''} key={item.id}>
//                                 {item.text}
//                             </li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

const Tabbar = (props) => {
    return (
        <div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return <li onClick={() => props.event(index)} className={index === props.index ? 'active' : ''} key={item.id}>
                            {item.text}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Tabbar
