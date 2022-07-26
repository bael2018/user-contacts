import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    users: [],
    isLoading: false,
    isActiveModal: false,
    userId: 0
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        initUsers: (state, action) => {
            state.users = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setModal: (state, action) => {
            state.isActiveModal = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        }
    }
})

export const { 
    initUsers, 
    setUserId,
    setIsLoading ,
    setModal
} = userSlice.actions
export default userSlice.reducer