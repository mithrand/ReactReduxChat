/**
 * Created by amunoz on 15/03/2017.
 */
import {Message} from '../model/Message';

export class State {
    Messages: Message[];

    constructor() {
        this.Messages = [];
    }
}

export default State;