/**
 * Created by Antonio on 20/03/2017.
 */
import * as React from 'react';

export interface ConversationInputProps {
    onSubmit?(state: ConversationInputState): void;
}

export interface ConversationInputState {
    title: string;
}

export class ConversationInput extends React.Component<ConversationInputProps , {}> {

    props: ConversationInputProps;
    state: ConversationInputState;

    constructor(props: ConversationInputProps) {
        super(props);
        this.props = props;
    }

    getDefaultState = (): ConversationInputState => {
        return { title: ''};
    };

    stateIsValid = (): Boolean => {
        if (this.state.title) {
            return true;
        }else {
            return false;
        }
    };

    onFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.props.onSubmit && this.stateIsValid()) {
            this.props.onSubmit(this.state);
            this.setState(this.getDefaultState());
        }
    };

    onChangeInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        let newState = Object.assign({}, this.state) ;
        newState[event.currentTarget.name] = event.currentTarget.value;
        this.setState(newState);

    };

    render() {
        return (
            <form className="form-inline" onSubmit={this.onFormSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="text">Conversation</label>
                    <input
                        name="title"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="Conversation"
                        onChange={this.onChangeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-default">Create new Conversation</button>
            </form>
        );
    }
}

export default ConversationInput;