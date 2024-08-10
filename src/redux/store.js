import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [
      {
        "id": "id-1",
        "name": "Rosie Simpson",
        "number": "459-12-56"
      },
      {
        "id": "id-2",
        "name": "Hermione Kline",
        "number": "443-89-12"
      },
      {
        "id": "id-3",
        "name": "Eden Clements",
        "number": "645-17-79"
      },
      {
        "id": "id-4",
        "name": "Annie Copeland",
        "number": "227-91-26"
      }
    ]
  },
  filters: {
    name: ''
  }
}

export const addContact = (value) => {
  return {
    type: 'contacts/addContact',
    payload: value
  }
}

export const deleteContact = (value) => {
  return {
    type: 'contacts/deleteContact',
    payload: value
  }
}

export const changeFilter = (value) => {
  return {
    type: 'filters/changeFilter',
    payload: value
  }
}

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload]
        }
      }
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(contact => contact.id !== action.payload)
        }
      };
    case 'filters/changeFilter':
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload
        }
      }
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: rootReducer
});