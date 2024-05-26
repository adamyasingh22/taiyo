import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { v4 as uuidv4 } from 'uuid';

// Define a type for the slice state
interface ContactState {
  firstName: string,
  lastName: string,
  active: boolean,
  id?: string
}

// Define the initial state using that type
const initialState: Array<ContactState> = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<ContactState>) => {
      state.push({...action.payload, id: uuidv4()})
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter(obj => obj.id !== action.payload);
    },
    edit: (state, action: PayloadAction<ContactState>) => {
        const idx = state.findIndex(obj => obj.id === action.payload.id)
        state[idx] = action.payload
    }
  },
})

export const { save, remove, edit} = contactSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getContacts = (state: RootState) => state

export default contactSlice.reducer