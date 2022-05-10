/*
 * @Author: whj0117
 * @Date: 2022-05-10 12:23:02
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import pTypes from 'prop-types'
export default class Navbar extends Component {
    // 属性验证
    static propTypes = {
        title:pTypes.string,
        leftShow:pTypes.bool
    }

    // 设置默认属性
    static defaultProps = {
        leftShow:true
    }
    render() {
        console.log(pTypes)
        let { title,leftShow } = this.props
        return (
            <div>
                {leftShow && <button>返回</button>}
                navbar-{title}
                <button>home</button>
            </div>
        )
    }
}

// Navbar.propTypes = {
//     title:propTypes.string,
//     leftShow:propTypes.bool
// }

// Navbar.defaultProps = {
//     leftShow:true
// }
