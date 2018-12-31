import React, { Component } from 'react'
import Beer from './Beer';
import { Card } from 'semantic-ui-react'
// import InfiniteScroll from 'react-infinite-scroller';
import { Loader } from 'semantic-ui-react'

export default class BeerList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        this.props.history.push(`/beer/${id}`)
    }


    render() {

        const beers = this.props.beers.map(b => {
            return (
                <Beer
                    id={b.id}
                    key={b.id}
                    name={b.name}
                    tagline={b.tagline}
                    author={b.contributed_by}
                    imgUrl={b.image_url}
                    handleClick={this.handleClick} />
            )
        })

        const loader =
            this.props.isLoading
                ? <Loader active inline className="centered" />
                : <Card.Group itemsPerRow={4} className="p-2">
                    {beers}
                </Card.Group>

        return (
            <React.Fragment>{loader}</React.Fragment>

            // <InfiniteScroll
            //     pageStart={this.props.page}
            //     loadMore={this.props.handlePagination.bind(this)}
            //     hasMore={true || false}
            //     loader={<div className="loader" key={0}>Loading ...</div>}
            // >
            //     {content}
            // </InfiniteScroll>

        )
    }
}
