import { createSlice } from "@reduxjs/toolkit";

export const breadcrumb = createSlice({
  name: "breadcrumb",
  initialState: {
    currentData: "",
    prevData: "Home"
  },
  reducers: {
    breadCrumb: (state, action) => {
       state.currentData = state.prevData;
       state.prevData = action.payload;
    }
  }

})

export const {breadCrumb} = breadcrumb.actions

export default breadcrumb.reducer