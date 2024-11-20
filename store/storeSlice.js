import { createSlice } from "@reduxjs/toolkit";

 const navigationTab = createSlice({
    name:'navigationTab',
    initialState:{
        whichTab:"Dashboard",
        userAddresss:'',
        tokenSlected:null
    },

    reducers:{
        tabChanger:(oldData,newData) => {
            oldData.whichTab = newData.payload
        },

        userAddress:(oldData,newData) => {
            oldData.userAddresss = newData.payload
        },
        tokenSlectedSet:(oldData,newData)=>{
            oldData.tokenSlected = newData.payload
        }
    }
})

export default navigationTab
export const {tabChanger,userAddress,tokenSlectedSet} = navigationTab.actions

