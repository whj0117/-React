/*
 * @Author: whj0117
 * @Date: 2022-05-14 22:31:10
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { useState } from 'react'

export default function App() {
    const [text,setText] = useState('')
    const [list,setList] = useState(['1','2','3'])
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handleAdd = () =>{
        console.log(text)
        setList([...list,text])
        setText('')
    }

    const handelDel = (index) => {
        let newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }
  return (
    <div>
        <input onChange={handleChange} value={text}/>
        <button onClick={handleAdd}>click</button>
        <ul>
            {
                list.map((item,index)=><li key={item}>
                    {item}
                    <button onClick={()=>handelDel(index)}>del</button>
                </li>)
            }
        </ul>
        {!list.length && <div>暂无数据...</div>}
    </div>
  )
}
