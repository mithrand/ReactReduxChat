/**
 * Created by amunoz on 22/03/2017.
 */

import * as React from 'react';

export interface FormProps {
    caption: string;
    addButtonCaption?: string;
    placeholder: string;
    onSubmit(text: string): void;
}

export const AddForm: React.StatelessComponent<FormProps> = (props: FormProps) => {

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(event.currentTarget.elements['text'].value); // tslint:disable:no-string-literal
        event.currentTarget.elements['text'].value = '';
    };

    return (
        <form className="form-inline" onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="text">{props.caption}</label>
                <input
                    name="text"
                    type="text"
                    className="form-control"
                    placeholder={props.placeholder}
                />
            </div>
            <button type="submit" className="btn btn-default">
                {props.addButtonCaption ? props.addButtonCaption : 'Add'}
            </button>
        </form>
    );
};

export default AddForm;
