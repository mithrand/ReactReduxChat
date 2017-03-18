/**
 * Created by amunoz on 15/03/2017.
 */

import * as React from 'react';
import {Message} from '../model/Message';

export interface MessageViewProps {
    messages: Message[];
    onClick?(id: string): void;
}

export class MessageView extends React.Component<MessageViewProps, {}> {

    constructor(props: MessageViewProps) {
        super(props);
        this.props = props;
    }

    onClickHandler = (event: React.FormEvent<HTMLLIElement>): void => {
        let id  = event.currentTarget.getAttribute('data-id');
        if (this.props.onClick && id) {
            this.props.onClick(id);
        }
    };

    render() {
        let messages = this.props.messages
            .map((m: Message) =>
                (
                    <li key={m.id} data-id={m.id} className="list-group-item" onClick={this.onClickHandler}>
                        <h5><small>{m.timeSpam.format('HH:mm:ss')}</small> {m.text}</h5>
                    </li>
                ));
        return(
            <div className="jumbotron">
                <ul className="list-group">
                {messages}
                </ul>
            </div>
        );
    }

}
