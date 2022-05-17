/*
 * @Author: whj0117
 * @Date: 2022-05-17 18:10:16
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { useEffect, useState } from 'react'

export default function App() {
    const [name,setName] = useState('xiaoming')
    useEffect(()=>{
        setName(name.substring(0,1).toUpperCase()+name.substring(1,name.length))
    },[name])
  return (
    <div>
        <button onClick={()=>{
            setName('zhangsan')
        }}>click</button>
        {name}
    </div>
  )
}
