import { CREATE_CONTACT, GET_CONTACT, DELETE_CONTACT,UPDATE_CONTACT } from "./actionType";

export const addContact=(contact) =>({
    type : CREATE_CONTACT,
    payload: contact,
})

export const getContact = (number) => ({
    type: GET_CONTACT,
    payload: number,
  }); 

  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
  }); 

  export const deleteContact = (number) => ({
    type: DELETE_CONTACT,
    payload: number,
  });