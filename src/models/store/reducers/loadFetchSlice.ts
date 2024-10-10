
import { createSlice } from '@reduxjs/toolkit'


const initialState: boolean = false

const loadFetchSlice = createSlice({
  name: 'loadFetch',
  initialState,
  reducers: {
    setLoadFetchTrue: (__state: boolean) => {
      return true;
    },
    setLoadFetchFalse: (__state: boolean) => {
        return false;
      },
  }
})

export const { 
  setLoadFetchFalse, 
  setLoadFetchTrue
} = loadFetchSlice.actions

export default loadFetchSlice.reducer