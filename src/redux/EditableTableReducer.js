import { v4 as uuidv4 } from 'uuid';

// import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_ROW = 'editableTable/addRow';
const DELETE_ROW = 'editableTable/deleteRow';
// const EDIT_CELL = 'editableTable/editCell';

// Initial State
const initialState = {
  rowList: [{
    id: uuidv4(),
    Company: 'Alfreds Futterkiste',
    Contact: 'Maria Anders',
    Country: 'Germany',
  },
  {
    id: uuidv4(),
    Company: 'Centro comercial Moctezuma',
    Contact: 'Francisco Chang',
    Country: 'Mexico',
  }],
};

const editableTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        rowList: [...state.rowList, action.payload],
      };
    case DELETE_ROW:
      return {
        rowList: state.rowList.filter((row) => row.id !== action.payload),
      };
      // case EDIT_CELL:
      //   return {
      //     rowList: [...state.rowList, ]
      //   };
    default:
      return state;
  }
};

export const addRowAction = {
  type: ADD_ROW,
  payload: {
    Company: '',
    Contact: '',
    Country: '',
  },
};

export const deleteRowAction = (id) => (
  {
    type: DELETE_ROW,
    payload: id,
  }
);

// export const editCell = (id) => {
//   type: EDIT_CELL,
//   payload: id,
// }

// export const getDetailsAction = createAsyncThunk(GET_DETAILS, async (symbol) => {
//   const profile = await fetchProfile(symbol);
//   const value = await fetchValue(symbol);
//   const companyLogo = profile[0].image;
//   console.log({ companyLogo, value });
//   return { companyLogo, value };
// });

export default editableTableReducer;
