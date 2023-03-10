// import { combineReducers } from 'redux';
// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: {
//     name: '',
//   },
// };

// const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contact/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'contact/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload.contactId
//         ),
//       };
//     case 'contact/filterContact':
//       return {
//         ...state,
//         filter: action.payload.name,
//       };

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });
