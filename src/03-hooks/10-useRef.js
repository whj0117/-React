/*
 * @Author: whj0117
 * @Date: 2022-05-24 23:08:06
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */
import React, { useState,useRef } from 'react'

export default function App() {
    const [list,setList] = useState(['1','2','3'])
    const myRef = useRef(null)
    
    const handleAdd = () =>{
        setList([...list,myRef.current.value])
        myRef.current.value = ''
    }

    const handelDel = (index) => {
        let newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }
  return (
    <div>
        <input ref={myRef}/>
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

