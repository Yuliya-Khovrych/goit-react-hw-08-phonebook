import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;

// ----------Without builder------------

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// extraReducers: {
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items.push(action.payload);
//   },
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     const index = state.items.findIndex(
//       contact => contact.id === action.payload.id
//     );
//     state.items.splice(index, 1);
//   },

// [fetchContacts.pending]: handlePending,
// [addContact.pending]: handlePending,
// [deleteContact.pending]: handlePending,

// [fetchContacts.rejected]: handleRejected,
// [addContact.rejected]: handleRejected,
// [deleteContact.rejected]: handleRejected,
// },

//});

//export const contactsReducer = contactsSlice.reducer;
