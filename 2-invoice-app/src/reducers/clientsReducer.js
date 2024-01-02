import { createSlice } from '@reduxjs/toolkit'

const clientsSlice = createSlice({
    name: 'clients',
    initialState: [],
    reducers: {
        createClient: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { createClient } = clientsSlice.actions
export default clientsSlice.reducer