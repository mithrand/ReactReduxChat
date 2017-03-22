/**
 * Created by amunoz on 22/03/2017.
 */
import * as React from 'react';

export interface Tab {
    title: string;
    id: string;
    active: boolean;
}

export interface TabsProps {
    tabs: Tab[];
    onClick(id: string): void;
}

export class Tabs extends React.Component<TabsProps , {}> {

    props: TabsProps;

    constructor(props: TabsProps) {
        super(props);
        this.props = props;
    }

    render() {
        const tabs = this.props.tabs.map( x => {
            return (
                <li
                    key={x.id}
                    role="presentation"
                    className={x.active ? 'active' : ''}
                    onClick={() => { this.props.onClick(x.id)}}
                >
                    <a href="#">{x.title}</a>
                </li>
            );
        });

        return(
            <ul className="nav nav-tabs">
            {tabs}
            </ul>
        );
    }
}

export default Tabs;