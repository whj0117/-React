/*
 * @Author: whj0117
 * @Date: 2022-05-10 12:48:21
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React from 'react'

export default function Sidebar(props) {
    let { bg,position } = props
    let obj = {
        position:'fixed',
        backgroundColor: bg, 
        width: '200px'
    }

    let obj1 = {
        left:0
    }

    let obj2 = {
        right:0
    }

    obj = position === 'left' ? {...obj,...obj1} : {...obj,...obj2}
    return (
        <div style={obj}>
            <ul>
                <li>100</li>
                <li>100</li>
                <li>100</li>
                <li>100</li>
                <li>100</li>
                <li>100</li>
                <li>100</li>
                <li>100</li>
            </ul>
        </div>
    )
}
