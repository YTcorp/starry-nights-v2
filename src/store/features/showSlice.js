import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    isOpenModal: false,
    dataModal: [],
    isOpenMenu: false,
  },
  reducers: {
    setModalContent(state, action) {
      state.dataModal = action.payload;
    },
    openModal(state) {
      state.isOpenModal = true;
    },
    closeModal(state) {
      state.isOpenModal = false;
    },
    openMenu(state) {
      state.isOpenMenu = true;
    },
    closeMenu(state) {
      state.isOpenMenu = false;
    },
  },
});
export const { setModalContent, openModal, closeModal, openMenu, closeMenu } =
  showSlice.actions;
export default showSlice.reducer;
