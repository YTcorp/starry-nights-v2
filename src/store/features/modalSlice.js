import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenModal: false,
    dataSearchBar: [],
  },
  reducers: {
    setModalContent(state, action) {
      state.dataSearchBar = action.payload;
    },
    openModal(state) {
      state.isOpenModal = true;
    },
    closeModal(state) {
      state.isOpenModal = false;
    },
  },
});
export const { setModalContent, openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
