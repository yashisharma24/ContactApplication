import { CREATE_CONTACT, GET_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../actions/actionType";
import React from 'react';


export const intialState = {
    contacts: [

        {
            id: 0,
            firstName: 'Agnus',
            lastName : 'Silvia',

            number: '9848200000',
            company: 'Optum',
            email: 'agnus@gmail.com'
        },
        {
            id: 1,
            firstName: 'Rahul',
            lastName : 'Arigela',
            number: '9848311111',
            company: 'Optum',
            email: 'Rahul@gmail.com'
        },
        {
            id: 2,
            firstName: 'Varun',
            lastName : 'Mehta',
            number: '9848522222',
            company: 'Optum',
            email: 'Varun@gmail.com'
        },
        {
            id: 3,
            firstName: 'Isha',
            lastName : 'Sharma',
            number: '9848633333',
            company: 'Optum',
            email: 'Isha@gmail.com'
        },
        {
            id: 4,
            firstName: 'Amit',
            lastName : 'Pandey',
            number: '9848644444',
            company: 'Optum',
            email: 'Amit@gmail.com'
        },
        {
            id: 5,
            firstName: 'Munaff',
            lastName : 'Basha',
            number: '9848755555',
            company: 'Optum',
            email: 'Munaff@gmail.com'
        },
        {
            id: 6,
            firstName: 'Shyam',
            lastName : 'Komirishetty',
            number: '9848766666',
            company: 'Optum',
            email: 'Shyam@gmail.com'
        },
        {
            id: 7,
            firstName: 'Raman',
            lastName : 'Sindhu',
            number: '9848877777',
            company: 'Optum',
            email: 'Raman@gmail.com'
        },
        {
            id: 8,
            firstName: 'Shipra',
            lastName : 'Sharma',
            number: '9848888888',
            company: 'Optum',
            email: 'Kshipra@gmail.com'
        },
        {
            id: 9,
            firstName: 'Swapna',
            lastName : 'Juluru',
            number: '9848999999',
            company: 'Optum',
            email: 'Swapna@gmail.com'
        },
        {
            id: 10,
            firstName: 'Shourya',
            lastName : 'Arya',
            number: '9848900001',
            company: 'Optum',
            email: 'Shourya@gmail.com'
        },
        {
            id: 11,
            firstName: 'Ramesh',
            lastName : 'Mukalla',
            number: '9848900002',
            company: 'Optum',
            email: 'Ramesh@gmail.com'
        },
        {
            id: 12,
            firstName: 'Praneeth',
            lastName : 'Kuruwa',
            number: '9848900003',
            company: 'Optum',
            email: 'Praneeth@gmail.com'
        },
        {
            id: 13,
            firstName: 'Yashi',
            lastName : 'Sharma',
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


