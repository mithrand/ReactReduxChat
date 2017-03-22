/**
 * Created by amunoz on 15/03/2017.
 */
import * as React from 'react';
import {AddForm} from './AddForm';

interface MessageInputProps {
    name: string;
    onSubmit(form: FormState): void;
}

export interface FormState {
    text: string;
}

export class MessageInput extends React.Component<MessageInputProps , {}> {

    props: MessageInputProps;
    state: FormState;

    constructor(props: MessageInputProps) {
        super(props);
        this.props = props;
        this.state = this.getDefaultState();
    }

    getDefaultState = (): FormState => {
        return { text: '' };
    };

    onChangeHandler = (event: React.FormEvent<HTMLInputElement> ) => {
        let newState = Object.assign({}, this.state) ;
        newState[event.currentTarget.name] = event.currentTarget.value;
        this.setState(newState);
    };

    onFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if ( this.state.text !== '') {
            this.props.onSubmit(this.state);
            this.setState(this.getDefaultState())
        }
    };

    render() {
        return(
            <AddForm
                caption="Message"
                addButtonCaption="Add Message"
                placeholder="Message"
                text={this.state.text}
                onSubmit={this.onFormSubmitHandler}
                onChange={this.onChangeHandler}
            />
        );
    }
}
