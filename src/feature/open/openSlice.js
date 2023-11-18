import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const openSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
    setIsOpen: (state,action) => {
      
      state.isOpen =action.payload;
    }
    
  }
})


export const { setIsOpen} = openSlice.actions;
export const getIsOpen=(state)=>state.open.isOpen;


export default openSlice.reducer