import {createSlice} from '@reduxjs/toolkit'


const isNewClientSlice = createSlice({
    name: 'isClickedNewClient',
    initialState: false,
    reducers: {
        toggleIsClickedNewClient(state) {
            return !state
        }
    }
})

export const { toggleIsClickedNewClient } = isNewClientSlice.actions
export default isNewClientSlice.reducer