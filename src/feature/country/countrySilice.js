import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


 export const my_URL = "http://universities.hipolabs.com/search";


export const fetchURL = createAsyncThunk(
  'country/fetchURL',
  async () => {
    const response = await axios.get(my_URL);
    // console.log(response.data,"response.data")
    return response.data;
  },
);

const initialState = {
  
  allData:[],
  status:"idle",
  error: "",
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchURL.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(fetchURL.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.allData= action.payload;
    })
    .addCase(fetchURL.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    });
    },
})




export const selectData= (state) => state.country.allData;
export const getStatus = (state) => state.country.status;
export const getError = (state) => state.country.error;
export default countrySlice.reducer