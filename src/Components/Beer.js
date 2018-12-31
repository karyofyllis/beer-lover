import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
export default function Beer(props) {

    const colors = [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
    ]

    const color = {
        backgroundColor: colors[Math.floor(Math.random() * (colors.length - 1))]
    }

    return (
        <Card color={color.backgroundColor} onClick={() => props.handleClick(props.id)}>
            <Card.Content >
                <Card.Header>{props.name}</Card.Header>
            </Card.Content>
            <div className="image-container p-2">
                <Image centered size='mini' src={props.imgUrl} />
            </div>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.title}</span>
                </Card.Meta>
                <Card.Description>{props.tagline}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {props.author}
            </Card.Content>
        </Card>
    )
}
