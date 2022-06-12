import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    data: [],
  },
  reducers: {
    setModalContent(state, action) {
      state.data = action.payload;
    },
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});
export const { setModalContent, openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
