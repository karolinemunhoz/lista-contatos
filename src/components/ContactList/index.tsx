import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ContactItem from "../ContactItem";

import * as S from "./styles";


export default function ContactList() {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <S.Container>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </S.Container>
  );
}
