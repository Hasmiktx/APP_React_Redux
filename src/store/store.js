import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import countryReducer from "../feature/country/countrySilice"
import choosenCountryReducer from "../feature/choosenCountry/choosenCountrySlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    country:countryReducer,
    choosenCountry:choosenCountryReducer,
  },
})