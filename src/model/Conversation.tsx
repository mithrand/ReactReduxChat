/**
 * Created by amunoz on 15/03/2017.
 */
import {User} from './User';
import {Message} from './Message';

export interface Conversation {
    id: string;
    title: string;
    owner: User[];
    users: User[];
    messages: Message[];
}
