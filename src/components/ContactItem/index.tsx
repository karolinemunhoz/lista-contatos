import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeContact, updateContact } from "../../store/contactsSlice";
import { Contact } from "../../types/Contact";
import { AppDispatch } from "../../store";

import * as S from "./styles";

interface Props {
  contact: Contact;
}

export default function ContactItem({ contact }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const [isEditing, setIsEditing] = useState(false);

  const [editedContact, setEditedContact] = useState(contact);

  const handleSave = () => {
    dispatch(updateContact(editedContact));
    setIsEditing(false);
  };

  return (
    <S.Card>
      {isEditing ? (
        <>
          <input
            value={editedContact.name}
            onChange={e =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />

          <input
            value={editedContact.email}
            onChange={e =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />

          <input
            value={editedContact.phone}
            onChange={e =>
              setEditedContact({ ...editedContact, phone: e.target.value })
            }
          />

          <S.Actions>
            <S.SaveBtn onClick={handleSave}>Salvar</S.SaveBtn>
            <button onClick={() => setIsEditing(false)}>Cancelar</button>
          </S.Actions>
        </>
      ) : (
        <>
          <S.Name>{contact.name}</S.Name>
          <S.Info>{contact.email}</S.Info>
          <S.Info>{contact.phone}</S.Info>

          <S.Actions>
            <S.EditBtn onClick={() => setIsEditing(true)}>Editar</S.EditBtn>
            <S.DeleteBtn onClick={() => dispatch(removeContact(contact.id))}>
              Remover
            </S.DeleteBtn>
          </S.Actions>
        </>
      )}
    </S.Card>
  );

}
