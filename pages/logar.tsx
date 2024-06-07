import Footer from '../components/Footer';
import Header from '../components/Header';
import React, { useState } from 'react';
import { useRouter } from 'next/router'; 

export default function logar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/projetoTeste/rest/oceanis/login/inserir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });

      if (response.ok) {
      
        console.log('Login realizado com sucesso!');
        
        router.push('/');
      } else {
        alert('Erro ao tentar fazer login');
      }
    } catch (err) {
      console.error('Erro ao tentar fazer login:', err);
    }
  };

  return (
    <div className="page-container">
      <Header />
      <main className="conteudo centralizado">
        <form className="form-login" onSubmit={handleSubmit}>
          <h1 className="titulo-login">Login</h1>
          {erro && <p className="erro">{erro}</p>}
          <label className="label-login">
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="label-login">
            Senha:
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
          <button type="submit" className="botao-login">Entrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}