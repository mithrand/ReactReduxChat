/**
 * Created by amunoz on 15/03/2017.
 */

import * as React from 'react';
import {Message} from '../model/Message';

export interface MessageViewProps {
    messages: Message[];
}

export class MessageView extends React.Component<MessageViewProps, {}> {

    constructor(props: MessageViewProps) {
        super(props);
        this.props = props;
    }

    render() {
        let messages = this.props.messages.map(m => <li className="list-group-item" key={m.id}>m.text</li>);
        return(
            <div className="jumbotron">
                <ul className="list-group">
                {messages}
                </ul>
            </div>
        );
    }

}
