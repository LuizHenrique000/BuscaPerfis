import React from "react";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("Buscando...");
  const [bio, setBio] = useState("Buscando...");
  const [avatarURL, setAvatarURL] = useState("");

  const handleSearch = () => {
    axios.get(`https://api.github.com/users/${pesquisa}`).then((response) => {
      setNomeUsuario(response.data.name);
      setBio(response.data.bio);
      setAvatarURL(response.data.avatar_url);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome do Git"
        name="nome"
        onChange={(e) => {
          setPesquisa(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Procurar</button>
      <h1>{nomeUsuario}</h1>
      <h4>{bio}</h4>
      <img src={avatarURL} alt="Imagem do usuário" />
    </div>
  );
}
