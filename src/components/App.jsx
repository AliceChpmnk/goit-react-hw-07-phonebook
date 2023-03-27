import { GlobalStyle } from 'components/GlobalStyle';
import React, { useEffect } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { StyledForm } from './Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContact } from 'redux/operations';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
        <StyledForm>
        <h1>Phonebook</h1>
          <Form />
        </StyledForm>
        <h1>Contacts</h1>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
        <Contacts />
      <GlobalStyle />
    </div>
  )
}

export default App;