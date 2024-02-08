import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlice from "../features/breadcrumbs/breadcrumbSlice";

export default configureStore({
    reducer: {
       bread: breadcrumbSlice
    }
})