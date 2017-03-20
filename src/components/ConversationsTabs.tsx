/**
 * Created by amunoz on 20/03/2017.
 */

import * as React from 'react';
import {Conversation} from '../model/Conversation';

export interface ConversationInputProps {
    conversations: Conversation[];
    selectedConversation: string;
    onClick?(id: string): void;
}

export class ConversationsTabs extends React.Component<ConversationInputProps , {}> {

    props: ConversationInputProps;

    constructor(props: ConversationInputProps) {
        super(props);
        this.props = props;
    }

    onClickHander = (event:  React.FormEvent<HTMLLIElement>): void => {
        let id  = event.currentTarget.getAttribute('data-id');
        if (this.props.onClick && id) {
            this.props.onClick(id);
        }
    };

    render() {

        let conversations = this.props.conversations.map(x => {
            let styles = x.id === this.props.selectedConversation ? 'active' : '';
            return(
                <li key={x.id} data-id={x.id} role="presentation" className={styles} onClick={this.onClickHander}>
                    <a href="#">{x.title}</a>
                </li>
            );
        });

        return (
            <ul className="nav nav-tabs">
                {conversations}
            </ul>
        );
    }
}

export default ConversationsTabs;