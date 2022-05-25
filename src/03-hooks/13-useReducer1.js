/*
 * @Author: whj0117
 * @Date: 2022-05-25 18:07:43
 * @LastEditors: whj0117
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 */
import React, { useReducer } from 'react'

const reducer = (prevState,action) => {
    const type = action.type
    let newState = {...prevState}
    switch(type){
        case "mins":
            newState.count--
            return newState
            case 'add':
            newState.count++
            return newState
            default:
                return prevState
    }
}

const intialState = {
    count:0
}

export default function App() {
    const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
        <button onClick={()=>{
            dispatch({
                type:'mins'
            })
        }}>-</button>
        {state.count}
        <button onClick={()=>{
            dispatch({
                type:'add'
            })
        }}>+</button>
    </div>
  )
}
