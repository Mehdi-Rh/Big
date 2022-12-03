import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import editableTableReducer from './EditableTableReducer';

const store = configureStore({
  reducer: editableTableReducer,
  middleware: [thunk],
});

export default store;
