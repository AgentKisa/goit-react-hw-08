import React from "react";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContactThunk } from "../redux/contactsOps";
import { selectIsError, selectIsLoading } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <h1>Loading...</h1>}
        {isError && <h2>Something went wrong!</h2>}
      </div>
    </>
  );
};

export default ContactsPage;
