import React from 'react';


// <Tabs list={list} />
export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { idx: 0 };
    }

    selectTab(i) {
        this.setState({
            idx: i
        });
    }

    render() {
        // const tabs = props
        return (
            <div className="tabs">
                <ul>
                    {this.props.tabs.map((tab, idx) => 
                        <span key={tab.objectID} onClick={this.selectTab.bind(this, idx)}>
                            {tab.title}
                        </span>)}
                </ul>
                <article>
                    {this.props.tabs[this.state.idx].content}
                </article>
            </div>
        )
    }
}