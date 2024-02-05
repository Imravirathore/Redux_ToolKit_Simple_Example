import { createSlice } from "@reduxjs/toolkit";
export const incdecSlice = createSlice({
  name: "incedec",
  initialState: 1,
  reducers: {
    Inc: (state, action) => {
      return (state += 1);
    },
    Dec: (state, action) => {
      return (state -= 1);
    },   
    Sec: (state, action) => {
      return (state += 10);
    },
    Cart:(state,action)=>{

      return state = "Done"
    }
    
  },
});




export const { Inc, Dec,Sec,Cart } = incdecSlice.actions  // +,- wali functionality ko export kr rhe h
export default incdecSlice.reducer;
