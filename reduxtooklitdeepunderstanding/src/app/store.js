import {configureStore} from '@reduxjs/toolkit'
import  showData  from '../featuers/showSlice'
export const store = configureStore({
    reducer:{
        show: showData
    },
})

//inititaly the store is empty