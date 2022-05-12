/*
 * @Author: whj0117
 * @Date: 2022-05-12 20:44:10
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

class Box extends Component {
    componentDidUpdate() { console.log('componentDidUpdate') }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
            return true
        }
        return false
    }
    render() {
        return <div style={{ float: "left", width: '100px', height: '100px', margin: '10px', textAlign: 'center', lineHeight: '100px', border: this.props.current === this.props.index ? '1px solid #000' : '1px solid #09c' }}>{this.props.list}</div>
    }
}

export default class App extends Component {
    state = {
        list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        current: 0
    }
    render() {
        return (
            <div>
                <input type='number' onChange={(evt) => {
                    this.setState({
                        current: Number(evt.target.value)
                    })
                }} />
                <div style={{ overflow: 'hidden' }}>
                    {
                        this.state.list.map((item, index) => <Box key={index} current={this.state.current} index={index} list={item} />)
                    }
                </div>
            </div>
        )
    }
}
