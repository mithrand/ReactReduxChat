/**
 * Created by amunoz on 22/03/2017.
 */
import * as React from 'react';

export interface Item {
    timeSpam: string;
    text: string;
    id: string;
}

export interface ListItemProps {
    items: Item[];
    parentid?: string;
    onClick(id: string): void;
}

export const ListItem: React.StatelessComponent<ListItemProps> = (props: ListItemProps) => {

        const items = props.items.map(x => {
            return (
                <li
                    key={x.id}
                    className="list-group-item"
                    onClick={() => {props.onClick(x.id)}}
                >
                    <h5><small>{x.timeSpam}</small> {x.text}</h5>
                </li>
            );
        });

        return (
            <div className="jumbotron">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
};

export default ListItem;