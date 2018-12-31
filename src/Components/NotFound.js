import React from 'react'

export default function NotFound() {
    return (
        <div className="ui text container text-center">
            <img alt="" src={require('../Assets/pint.png')} />
            <h1 className="ui header grey">Ooops! Beer not found!</h1>
        </div>
    )
}
