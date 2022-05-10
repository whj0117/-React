/*
 * @Author: whj0117
 * @Date: 2022-05-10 21:37:28
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'
class FilmItem extends Component {
    render() {
        let { name, poster, grade, synopsis } = this.props
        return (
            <div className='filmitem' onClick={() => {
                this.props.event(synopsis)
            }}>
                <img src={poster} alt={name} />
                <h4>{name}</h4>
                <div>评分：{grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div className='filmDetail'>{
                this.props.synopsis
            }</div>
        )
    }
}


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            synopsis: ''
        }
        axios.get('/test.json').then(res => {
            console.log(res)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item => <FilmItem event={(value) => {
                        this.setState({
                            synopsis: value
                        })
                    }
                    } {...item} key={item.filmId} />)
                }
                <FilmDetail synopsis={this.state.synopsis} />
            </div>
        )
    }
}
