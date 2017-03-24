/**
 * Created by amunoz on 20/03/2017.
 */

import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import {State} from '../store/State';
import {conversationsActions} from '../actions/ConversationsActions';

import {AddForm} from '../presentation/AddForm';
import {Tabs} from '../presentation/Tabs'

const mapStateToTabsProps = (state: State) => ({
    tabs: state.conversations.map(c => ({title: c.title, id: c.id, active: c.id === state.selectedConversation})),
});

// we'll return an object with an onClick property configured to dispach our onClick function
const mapDispatchToTabsProps = (dispatch: Redux.Dispatch<State>) => ({
        onClick: (id: string) => {
            dispatch(conversationsActions.SELECT_CONVERSATION(id));
        },
    });

const mapStateToAddForm = (state: State) => ({
    caption: 'Conversation Title',
    addButtonCaption: 'Add new conversation',
    placeholder:  'Conversation title',
});

const mapDispatchToAddForm = (dispatch: Redux.Dispatch<State>) => ({
    onSubmit: (text: string): void => {
        dispatch(conversationsActions.ADD_CONVERSATION(text))
    },
});

// Al primer parametro se le pasa State y al segundo Dispatch
export const ConversationTabs: React.ComponentClass<{}> = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);

export const AddConversationForm: React.ComponentClass<{}> = connect(mapStateToAddForm, mapDispatchToAddForm)(AddForm);