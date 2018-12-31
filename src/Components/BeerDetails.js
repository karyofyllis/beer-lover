import React, { Component } from 'react'
import {
    Card,
    Image,
    Icon,
    Container,
    Loader
} from 'semantic-ui-react';
import { IngredientList } from './IngredientList';
export default class BeerDetails extends Component {

    state = {
        beer: null,
        isLoading: true
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('https://api.punkapi.com/v2/beers/' + id)
            .then(res => res.json())
            .then(data => this.setState({ beer: data[0], isLoading: false }))
    }
    render() {

        const {
            beer
        } = this.state;

        const content =
            this.state.isLoading
                ? <Loader active inline className="centered" />
                : <Container>
                    <Image centered className='p-2' size='tiny' src={this.state.beer.image_url} />
                    <Card.Group>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>{beer.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{beer.first_brewed}</span>
                                </Card.Meta>
                                <Card.Description>{beer.tagline}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='user' />
                                {beer.contributed_by}
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>Description</Card.Header>
                                <Card.Description>{beer.description}</Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <Card.Header>Ingredients</Card.Header>
                                <IngredientList ingredients={beer.ingredients} />
                            </Card.Content>
                            <Card.Content>
                                <Card.Header>Tips</Card.Header>
                                <Card.Description>{beer.brewers_tips}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}
