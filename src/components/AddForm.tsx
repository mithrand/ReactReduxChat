/**
 * Created by amunoz on 22/03/2017.
 */

import * as React from 'react';

export interface FormProps {
    text: string;
    caption: string;
    addButtonCaption?: string;
    placeholder: string;
    onSubmit(text: string): void;
}

export class AddForm extends React.Component<FormProps, {}> {
    props: FormProps;

    constructor(props: FormProps) {
        super(props);
        this.props = props;
    }

    onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.onSubmit(event.currentTarget.elements['text'].value); // tslint:disable:no-string-literal
    };

    render() {

        return (
            <form className="form-inline" onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="text">Conversation</label>
                    <input
                        name="text"
                        type="text"
                        className="form-control"
                        placeholder={this.props.placeholder}
                        value={this.props.text}
                    />
                </div>
                <button type="submit" className="btn btn-default">
                    {this.props.addButtonCaption ? this.props.addButtonCaption : 'Add'}
                </button>
            </form>
        );
    }
}

export default AddForm;
