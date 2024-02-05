import { configureStore } from '@reduxjs/toolkit'
import incdecreducer from './reducer/index'


export default configureStore({
  reducer: {
    numberWala:incdecreducer,
    
  },
})