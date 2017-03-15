/**
 * Created by amunoz on 15/03/2017.
 */
import * as React from 'react';

export class MessageInput extends React.Component<{} , {}> {

    render() {
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input name="message" type="text" className="form-control" placeholder="Message"/>
                </div>
                <button type="submit" className="btn btn-default">Send</button>
            </form>
        );
    }
}
