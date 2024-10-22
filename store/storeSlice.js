import { createSlice } from "@reduxjs/toolkit";

 const navigationTab = createSlice({
    name:'navigationTab',
    initialState:{
        whichTab:"Dashboard",
        userAddresss:'address'
    },

    reducers:{
        tabChanger:(oldData,newData) => {
            oldData.whichTab = newData.payload
        },

        userAddress:(oldData,newData) => {
            oldData.userAddresss = newData.payload
            console.log(newData.payload)
        }
    }
})

export default navigationTab
export const {tabChanger,userAddress} = navigationTab.actions

