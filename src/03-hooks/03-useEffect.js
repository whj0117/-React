/*
 * @Author: whj0117
 * @Date: 2022-05-17 17:38:40
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function App() {
    const [list,setList] = useState([])
    useEffect(()=>{
        axios.get('/test.json').then(res=>{
            console.log(res)
            setList(res.data.data.films)
        })
    },[])
  return (
    <div>
        <ul>
            {
                list.map(item=><li key={item.filmId}>{item.name}</li>)
            }
        </ul>
    </div>
  )
}
