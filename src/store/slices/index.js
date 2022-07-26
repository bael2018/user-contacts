import { combineReducers } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'

export const rootSlice = combineReducers({
    users: usersSlice
})