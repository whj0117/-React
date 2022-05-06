/*
 * @Author: 'whj0117'
 * @Email: '791281470@qq.com'
 * @Date: 2022-05-05 22:02:00
 * @Github: 'https://github.com/whj0117'
 */

import {Component} from 'react'

const Navbarchild = () => {
    return(
        <div>Navbarchild</div>
    )
}

class Navbar extends Component{
    render(){
        return <div>
            Navbar
            <Navbarchild />
        </div>
    }
}

function Swiper(){
    return(
        <div>
            Swiper
        </div>
    )
}

const Tabbar = () => <div>Tabbar</div>

export default class App extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Swiper />
                <Tabbar />
            </div>
        )
    }
}
