import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { my_URL } from '../country/countrySilice';



export const fetchByCountry = createAsyncThunk(
  'country/fetchByCountry',

  async (countryName) => {
    

   const response = await axios.get(`${my_URL}?country=${countryName}`);
    // console.log(response.data,"response.data")
    return response.data;
  },
);

const initialState = {
   choosenCountry:undefined,
   countryData:[],
    status:"idle",
    error: "",
}

export const choosenSlice = createSlice({
  name: 'choosenCountry',
  initialState,
  reducers: {
    addCountry:(state,action)=>{
        state.choosenCountry=action.payload
    }
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchByCountry.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(fetchByCountry.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.countryData= action.payload;
    })
    .addCase(fetchByCountry.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    });
    },
})




export const getChoosenCountry= (state) => state.choosenCountry.choosenCountry;
export const getCountryData= (state) => state.choosenCountry.countryData;

export const getStatusByCountry = (state) => state.choosenCountry.status;
export const getErrorByCountry = (state) => state.choosenCountry.error;

export const {addCountry} = choosenSlice.actions;
export default choosenSlice.reducer