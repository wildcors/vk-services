import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class Nav extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <a className='logo' href='/' title='vk-services'></a>
                <ul className='nav'>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' exact activeClassName='active'>top posts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/photos' exact activeClassName='active'>photos search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/friends' exact activeClassName='active'>mutual friens</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}