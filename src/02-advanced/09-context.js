/*
 * @Author: whj0117
 * @Date: 2022-05-11 21:04:49
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'

const GlobalContext = React.createContext() //创建context对象

class FilmItem extends Component {
    render() {
        let { name, poster, grade, synopsis } = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) =>{
                        console.log(value)
                        return <div className='filmitem' onClick={() => {
                            value.changeState(synopsis)
                        }}>
                            <img src={poster} alt={name} />
                            <h4>{name}</h4>
                            <div>评分：{grade}</div>
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value)=><div className='filmDetail'>{
                        value.info
                    }</div>
                }
            </GlobalContext.Consumer>
        )
    }
}


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ''
        }
        axios.get('/test.json').then(res => {
            this.setState({
                filmList: res.data.data.films
            })
        })
    }
    render() {
        return (
            <GlobalContext.Provider value={
                {
                    info:this.state.info,
                    changeState:(val)=>{
                        this.setState({
                            info:val
                        })
                    }
                }
            }>
                <div>
                    {
                        this.state.filmList.map(item => <FilmItem {...item} key={item.filmId} />)
                    }
                    <FilmDetail />
                </div>
            </GlobalContext.Provider>
        )
    }
}
