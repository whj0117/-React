/*
 * @Author: whj0117
 * @Date: 2022-05-23 00:11:44
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */
import React, { useCallback, useState } from 'react'

export default function App() {
    // useState记住状态
    const [count, setCount] = useState(0)
    // useCallback记住函数
    let handleClick = useCallback(()=>{
        
    },[])
    console.log(handleClick)
    let myCount = 0
    return (
        <div>
            <button onClick={()=>{
                setCount(count+1)
                myCount++
            }}>add</button>
            {count}-{myCount}
        </div>
    )
}
