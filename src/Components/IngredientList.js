import React from 'react'
import { Segment, List } from 'semantic-ui-react';
import { Ingredient } from './Ingredient'

export const IngredientList = (props) => {



    const malt = props.ingredients.malt.map((ing, i) => {
        return (
            <Ingredient key={i} name={ing.name} amount={ing.amount} add={ing.add} attribute={ing.attribute} />
        )
    })

    const hops = props.ingredients.hops.map((ing, i) => {
        return (
            <Ingredient key={i} name={ing.name} amount={ing.amount} add={ing.add} attribute={ing.attribute} />
        )
    })

    return (
        <Segment>
            <List divided relaxed>
                {[malt, hops]}
            </List>
        </Segment>
    )
}
