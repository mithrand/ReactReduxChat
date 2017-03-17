/**
 * Created by amunoz on 15/03/2017.
 */
import * as React from 'react';

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
        }
    };

    render() {
        return(
            <form onSubmit={this.onFormSubmitHandler} >
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input name="text" type="text" className="form-control" placeholder="Message"/>
                </div>
                <button type="submit" className="btn btn-default">Send</button>
            </form>
        );
    }
}
