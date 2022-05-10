/*
 * @Author: whj0117
 * @Date: 2022-05-10 20:50:14
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Field extends Component {
    render() {
        return <div style={{ backgroundColor: 'yellow' }}>
            <label>{this.props.label}：</label>
            <input type={this.props.type} onChange={(evt) => {
                this.props.onChangeEvent(evt.target.value)
            }} value={this.props.value}/>
        </div>
    }
}

export default class App extends Component {
    state = {
        username:'',
        password:''
    }
    render() {
        return (
            <div>
                <h1>登录</h1>
                <Field label="用户名" type='text' value={this.state.username} onChangeEvent={(value) => {
                    this.setState({
                        username:value
                    })
                }} />
                <Field label="密码" type='password' onChangeEvent={(value) => {
                     this.setState({
                        password:value
                    })
                }} />
                <button onClick={()=>{
                    console.log(this.state)
                }}>登录</button>
                <button>取消</button>
            </div>
        )
    }
}
