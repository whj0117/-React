/*
 * @Author: whj0117
 * @Date: 2022-05-10 17:18:20
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return <div style={{ backgroundColor: 'red' }}>
            <button onClick={this.props.handleChange}>click</button>
            <span>navbar</span>
        </div>
    }
}

class Sidebar extends Component {
    render() {
        return <div style={{ backgroundColor: 'yellow' }}>
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
    }
}

export default class App extends Component {
    state = {
        isShow:true
    }

    handleChange = () => {
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <Navbar handleChange={this.handleChange} />
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }
}
