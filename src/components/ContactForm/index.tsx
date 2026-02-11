import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contactsSlice";
import { AppDispatch } from "../../store";
import * as S from "./styles";



export default function ContactForm() {
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addContact({
      id: Date.now(),
      ...form
    }));

    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <S.Card>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Telefone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <S.AddButton type="submit">Adicionar</S.AddButton>
      </form>
    </S.Card>
  );
}
