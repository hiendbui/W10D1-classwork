import React from 'react';
import tabItems from './tab_items';

// <Tabs list={list} />
export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <h1>One</h1>
                <h1>Two</h1>
                <h1>Three</h1>
            </ul>
        )
    }
}