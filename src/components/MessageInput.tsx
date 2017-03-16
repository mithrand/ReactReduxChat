/**
 * Created by amunoz on 15/03/2017.
 */
import * as React from 'react';

interface MessageInputProps {
    name: string;
    onSubmit(event: string): void;
}

export class MessageInput extends React.Component<MessageInputProps , {}> {

    props: MessageInputProps;

    constructor(props: MessageInputProps) {
        super(props);
        this.props = props;
    }

    onFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let value: string = event.currentTarget.refs[this.props.name].value;
        this.props.onSubmit(value);
    };

    render() {
        return(
            <form onSubmit={this.onFormSubmitHandler} >
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input name="message" ref="text" type="text" className="form-control" placeholder="Message"/>
                </div>
                <button type="submit" className="btn btn-default">Send</button>
            </form>
        );
    }
}
