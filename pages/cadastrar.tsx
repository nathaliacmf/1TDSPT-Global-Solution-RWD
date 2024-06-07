import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/styles.css';

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    userNome: '',
    userIdade: '',
    userEmail: '',
    userSenha: '',
    userCep: '',
    fkOceanis: '1'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cepError, setCepError] = useState('');
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    if (name === 'userCep' && value.length > 8) {
      setCepError('O CEP deve ter no máximo 8 caracteres.');
      return;
    } else {
      setCepError('');
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/projetoTeste/rest/oceanis/inserir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const text = await response.text();
        const json = text ? JSON.parse(text) : {};
        console.log(json);
        setFormSubmitted(true);
        router.push('/');
      } else {
        console.error('Erro ao enviar formulário:', response.statusText);
      }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Cadastro</div>
        <div className='underline'></div>
      </div>
      {formSubmitted ? (
        <div className='success-message'>
          Cadastro realizado com sucesso!{' '}
          <Link href="/">Voltar para a página inicial</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='inputs'>
          <div className='input'>
            <Image src="/imgs/user.png" alt="User" width={100} height={100}/>
            <input
              type='text'
              placeholder='Nome'
              name='userNome'
              value={formData.userNome}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <Image src="/imgs/calendar.png" alt="User" width={100} height={100}/>
            <input
              type='number'
              placeholder='Idade'
              name='userIdade'
              value={formData.userIdade}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <Image src="/imgs/mail.png" alt='Email' width={100} height={100}/>
            <input
              type='email'
              placeholder='Email'
              name='userEmail'
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <Image src="/imgs/senha.png" alt='Password' width={100} height={100} />
            <input
              type='password'
              placeholder='Senha'
              name='userSenha'
              value={formData.userSenha}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <Image src="/imgs/cep.png" alt='CEP Icon' width={100} height={100} />
            <input
              type='text'
              placeholder='CEP'
              name='userCep'
              value={formData.userCep}
              onChange={handleChange}
              required
            />
            {cepError && <p className="error-message">{cepError}</p>}
          </div>
          <div className='account-exists-text'>
            Já possui uma conta? <Link href="/logar">Faça login aqui</Link>.
          </div>
          <div className='submit-container'>
            <button type='submit' className='submit'>Cadastrar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Cadastrar;
