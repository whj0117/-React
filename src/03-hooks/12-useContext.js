/*
 * @Author: whj0117
 * @Date: 2022-05-25 17:39:20
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */

import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() //创建context对象

function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    let value = useContext(GlobalContext)
    console.log(value)
    return (
        <div className='filmitem' onClick={() => {
            value.changeState(synopsis)
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>评分：{grade}</div>
        </div>
    )
}

function FilmDetail() {
    let value = useContext(GlobalContext)
    return (
        <div className='filmDetail'>{
            value.info
        }</div>
    )
}

export default function App() {
    const [info, setinfo] = useState('')
    const [filmList, setfilmList] = useState([])

    useEffect(() => {
        axios.get('/test.json').then(res => {
            setfilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={
            {
                info: info,
                changeState: (val) => {
                    setinfo(val)
                }
            }
        }>
            <div>
                {
                    filmList.map(item => <FilmItem {...item} key={item.filmId} />)
                }
                <FilmDetail />
            </div>
        </GlobalContext.Provider>
    )
}
