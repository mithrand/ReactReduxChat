/**
 * Created by amunoz on 15/03/2017.
 */
import * as moment from 'moment';

export interface Message {
    id: string;
    text: string;
    user: string;
    timeSpam: moment.Moment;
}
export default Message;