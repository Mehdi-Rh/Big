import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRowAction, deleteRowAction } from '../redux/EditableTableReducer';

const EditableTable = () => {
  const columnName = ['Company', 'Contact', 'Country'];
  const rowList = useSelector((state) => state.rowList);
  const dispatch = useDispatch();
  const addRow = () => {
    dispatch(addRowAction);
  };

  const deleteRow = (e) => {
    e.preventDefault();
    const { id } = e.target.parentElement.id;
    dispatch(deleteRowAction(id));
  };

  const editCell = (e) => {
    const column = e.target.classList;
    console.log(column);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {columnName.map((column) => <th key={column}>{column}</th>)}
          </tr>
          {rowList.map((row) => (

            <tr key={row.id} id={row.id}>
              <td><input className="country" onChange={editCell} value={row.Country} /></td>
              <td><input className="contact" onChange={editCell} value={row.Contact} /></td>
              <td><input className="company" onChange={editCell} value={row.Company} /></td>
              <button type="button" onClick={deleteRow}>X</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={addRow}>Add</button>
    </div>
  );
};

export default EditableTable;
