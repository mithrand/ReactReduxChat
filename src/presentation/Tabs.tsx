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

export const Tabs: React.StatelessComponent<TabsProps> = (props: TabsProps ) => {

    const tabs = props.tabs.map( x =>  (
            <li
                key={x.id}
                role="presentation"
                className={x.active ? 'active' : ''}
                onClick={() => { props.onClick(x.id)}}
            >
                <a href="#">{x.title}</a>
            </li>
        )
    );

    return (
        <ul className="nav nav-tabs">
        {tabs}
        </ul>
    );

};

export default Tabs;