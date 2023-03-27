import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContact } from "./operations";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePendingReducer = (state) => {
  state.isLoading = true;
  state.error = null;
}
const handleRejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  
  extraReducers: (builder) => builder
    // ---- GET ALL CONTACTS ----
    .addCase(fetchContact.pending, handlePendingReducer)
    .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
    .addCase(fetchContact.rejected, handleRejectedReducer)
  // ---- ADD CONTACT ----
    .addCase(addContact.pending, handlePendingReducer)
    .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
      })
    .addCase(addContact.rejected, handleRejectedReducer)
  // ---- DELETE CONTACT ----
    .addCase(deleteContact.pending, handlePendingReducer)
    .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
    .addCase(deleteContact.rejected, handleRejectedReducer)
});

export const contactsReducer = contactsSlice.reducer;