/**
 * Created by amunoz on 15/03/2017.
 */
import {Message} from './Message';

export interface Conversation {
    id: string;
    title: string;
    messages: Message[];
}

export default Conversation