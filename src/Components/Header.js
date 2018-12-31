import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
export const Header = (props) => {

    return (
        <div className="ui stackable menu">
            <div className="item">
                <img alt="" src={require('../Assets/pint.png')} />
            </div>
            <Link to='/' className="item">Beers</Link>
            <div className="right menu">
                <div className="item">
                    <div className="ui icon input">
                        <SearchBar handleSearch={props.handleSearch} />
                        <i aria-hidden="true" className="search icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
