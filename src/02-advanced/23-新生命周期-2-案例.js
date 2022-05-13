/*
 * @Author: whj0117
 * @Date: 2022-05-13 22:01:27
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    myref = React.createRef()

    componentDidUpdate(prevProps,prevState,value){
        console.log(this.myref.current.scrollTop,this.myref.current.scrollHeight)
        this.myref.current.scrollTop = value.scrollTop + this.myref.current.scrollHeight - value.scrollHeight
    }

    getSnapshotBeforeUpdate(){
        console.log(this.myref.current.scrollTop,this.myref.current.scrollHeight)
        return {
            scrollHeight:this.myref.current.scrollHeight,
            scrollTop:this.myref.current.scrollTop
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        list:[...[11,12,13,14,15,16,17,18,19,20],...this.state.list]
                    })
                }}>来邮件</button>
                <h1>邮箱应用</h1>
                <ul ref={this.myref} style={{overflow:'auto',height:'200px',backgroundColor:'yellow'}}>
                    {
                        this.state.list.map(item=><li style={{marginBottom:'50px'}} key={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}
