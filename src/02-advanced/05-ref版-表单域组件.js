/*
 * @Author: whj0117
 * @Date: 2022-05-10 21:22:23
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:50:14
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Field extends Component {
    state = {
        value:''
    }

    clear(){
        this.setState({
            value:''
        })
    }
    render() {
        return <div style={{ backgroundColor: 'yellow' }}>
            <label>{this.props.label}：</label>
            <input type={this.props.type} onChange={(evt) => {
                this.setState({
                    value:evt.target.value
                })
            }} value={this.state.value}/>
        </div>
    }
}

export default class App extends Component {
    state = {
        username:'',
        password:''
    }

    username = React.createRef()
    password = React.createRef()
    render() {
        return (
            <div>
                <h1>登录</h1>
                <Field label="用户名" type='text' ref={this.username}/>
                <Field label="密码" type='password' ref={this.password}/>
                <button onClick={()=>{
                    console.log(this.username.current.state.value)
                    console.log(this.password.current.state.value)
                }}>登录</button>
                <button onClick={()=>{
                    this.username.current.clear()
                    this.password.current.clear()
                }}>取消</button>
            </div>
        )
    }
}

