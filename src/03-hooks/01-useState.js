/*
 * @Author: whj0117
 * @Date: 2022-05-14 22:27:01
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { useState } from 'react'

export default function App() {
    const [name, setName] = useState('aaa')
    const [age,setAge] = useState(18)
    return (
        <div>
            <button onClick={()=>{
                setName('bbb')
                setAge(20)
            }}>click</button>
            {name}-{age}
        </div>
    )
}
