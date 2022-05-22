/*
 * @Author: whj0117
 * @Date: 2022-05-23 00:17:12
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */

import React, { useState, useCallback } from 'react'

export default function App() {
    const [name, setname] = useState('zhangsan')
    const [text, setText] = useState('')
    const [list, setList] = useState(['1', '2', '3'])
    const handleChange = useCallback(
        (evt) => {
            setText(evt.target.value)
        },
        []
    )
    const handleAdd = useCallback(() => {
        console.log(text)
        setList([...list, text])
        setText('')
    }, [text, list])

    const handelDel = useCallback((index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }, [list])
    return (
        <div>
            <button onClick={() => {
                setname('xiaoming')
            }}>{name}</button>
            <input onChange={handleChange} value={text} />
            <button onClick={handleAdd}>click</button>
            <ul>
                {
                    list.map((item, index) => <li key={item}>
                        {item}
                        <button onClick={() => handelDel(index)}>del</button>
                    </li>)
                }
            </ul>
            {!list.length && <div>暂无数据...</div>}
        </div>
    )
}
