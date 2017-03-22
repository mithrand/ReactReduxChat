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
    onClick(id: string): void;
}

export class ListItem extends React.Component< ListItemProps , {}> {

    props: ListItemProps;

    constructor(props: ListItemProps) {
        super(props);
        this.props = props;
    }

    render() {
        const items = this.props.items.map(x => {
            return (
                <li
                    key={x.id}
                    className="list-group-item"
                    onClick={() => {this.props.onClick(x.id)}}
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
    }

}

export default ListItem;