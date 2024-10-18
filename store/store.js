import { configureStore } from "@reduxjs/toolkit";
import navigationTab from "./storeSlice";

 const buffCatStore = configureStore({
    reducer:navigationTab.reducer
})

export default buffCatStore