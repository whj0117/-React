/*
 * @Author: whj0117
 * @Date: 2022-05-06 21:25:05
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import {Component} from 'react'

import './css/01-index.css'

export default class App extends Component{
    render(){
        var name = 'whj0117'
        var styleObj = {
            backgroundColor:"yellow",
            color:"red"
        }
        return(
            <div>
                {10+20}-{name}
                <br />
                {true ? 'aaa' : 'bbb'}
                <div style={{backgroundColor:'#09c'}}>
                    1111111111111111
                </div>
                <div style={styleObj}>
                    2222222222222222
                </div>

                <div className='wrap'>3333333333333333</div>

                <label htmlFor="username">用户名：</label>
                <input id='username'/>
            </div>
        )
    }
}