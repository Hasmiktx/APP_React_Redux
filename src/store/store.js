import { configureStore } from '@reduxjs/toolkit'

import countryReducer from "../feature/country/countrySilice"
import choosenCountryReducer from "../feature/choosenCountry/choosenCountrySlice"
import openSliceReducer from '../feature/open/openSlice'
export const store = configureStore({
  reducer: {
    open:openSliceReducer,
    country:countryReducer,
    choosenCountry:choosenCountryReducer,
  },
})