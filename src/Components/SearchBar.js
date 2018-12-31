import React, { Component } from 'react';

export default class SearchBar extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.query.value);
        // e.currentTarget.reset();
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit} >
                <input type="search"
                    name="search"
                    ref={(input) => this.query = input}
                    placeholder="Search..." />
            </form>
        );
    }
}