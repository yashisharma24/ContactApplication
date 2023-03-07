import { CREATE_CONTACT, GET_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../actions/actionType";
import React from 'react';


export const intialState = {
    contacts: [

        {
            id: 0,
            name: 'Agnus',
            number: '9848200000',
            company: 'Optum',
            email: 'agnus@gmail.com'
        },
        {
            id: 1,
            name: 'Rahul',
            number: '9848311111',
            company: 'Optum',
            email: 'Rahul@gmail.com'
        },
        {
            id: 2,
            name: 'Varun',
            number: '9848522222',
            company: 'Optum',
            email: 'Varun@gmail.com'
        },
        {
            id: 3,
            name: 'Isha',
            number: '9848633333',
            company: 'Optum',
            email: 'Isha@gmail.com'
        },
        {
            id: 4,
            name: 'Amit',
            number: '9848644444',
            company: 'Optum',
            email: 'Amit@gmail.com'
        },
        {
            id: 5,
            name: 'Munaff',
            number: '9848755555',
            company: 'Optum',
            email: 'Munaff@gmail.com'
        },
        {
            id: 6,
            name: 'Shyam',
            number: '9848766666',
            company: 'Optum',
            email: 'Shyam@gmail.com'
        },
        {
            id: 7,
            name: 'Raman',
            number: '9848877777',
            company: 'Optum',
            email: 'Raman@gmail.com'
        },
        {
            id: 8,
            name: 'Shipra',
            number: '9848888888',
            company: 'Optum',
            email: 'Kshipra@gmail.com'
        },
        {
            id: 9,
            name: 'Swapna',
            number: '9848999999',
            company: 'Optum',
            email: 'Swapna@gmail.com'
        },
        {
            id: 10,
            name: 'Shourya',
            number: '9848900001',
            company: 'Optum',
            email: 'Shourya@gmail.com'
        },
        {
            id: 11,
            name: 'Ramesh',
            number: '9848900002',
            company: 'Optum',
            email: 'Ramesh@gmail.com'
        },
        {
            id: 12,
            name: 'Praneeth',
            number: '9848900003',
            company: 'Optum',
            email: 'Praneeth@gmail.com'
        },
        {
            id: 13,
            name: 'Yashi',
            number: '9848900004',
            company: 'Optum',
            email: 'Yashi@gmail.com'
        },
    ],
    contact: [],

};


export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {

                contacts: [action.payload, ...state.contacts],

            };
        case DELETE_CONTACT:
            return {

                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.number != action.payload,
                ),
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id == action.payload.id ? action.payload : contact,
                ),
            };


        default: return state;
    }
}


