import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'
import { addContact } from './operations'
import { deleteContact } from './operations'

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null },
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
 
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
     .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = [action.payload, ...state.contacts.items]; 
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
         state.contacts.isLoading = false;
         state.contacts.error = action.payload;
      })
  },
  },
)

export default contactsSlice.reducer;


