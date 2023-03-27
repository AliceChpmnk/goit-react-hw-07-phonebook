import React from 'react';
import { selectVisibleTasks } from 'redux/selectors';
import { StyledContacts } from './Contacts.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';

function Contacts() {
  const visibleContacts = useSelector(selectVisibleTasks);
  const dispatch = useDispatch();

  return (
        <StyledContacts>
        {visibleContacts.map(({ name, number, id }) => (
            <li key={id}>{name}: {number}
                <button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </li>
        ))}
        </StyledContacts>
  )
}

export default Contacts;