import React from 'react'
import { List } from 'semantic-ui-react';
export const Ingredient = ({ name, amount, add, attribute }) => {


    return (
        <List.Item>
            <List.Content>
                {<List.Header>{name}</List.Header>}
                {amount.value} {amount.unit}
            </List.Content>
        </List.Item>
    )
}
