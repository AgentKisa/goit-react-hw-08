import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
// import { i } from "vite/dist/node/types.d-aGj9QkWt";
import "../../App";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
