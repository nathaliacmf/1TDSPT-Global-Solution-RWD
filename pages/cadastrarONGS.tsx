import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/styles.css';

const cadastrarONGS = () => {
  const [formData, setFormData] = useState({
    ongNome: '',
    ongCnpj: '',
    ongQtdFunc: '',
    uf: '',
    cidade: '',
    fkOceanis: '1',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const validateCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14) return false; 
    return true;
  };

  const validateUF = (uf: string) => {
    const validUFs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    return validUFs.includes(uf.toUpperCase());
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!validateCNPJ(formData.ongCnpj)) {
      alert('CNPJ inválido!');
      return;
    }
    if (!validateUF(formData.uf)) {
      alert('UF inválido!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/projetoTeste/rest/oceanis/ong/inserir', {
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
        router.push('/success');  // Redireciona para uma página de sucesso
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
        <div className='text'>Cadastro ONG</div>
        <div className='underline'></div>
      </div>
      {formSubmitted ? (
        <div className='success-message'>
          Cadastro realizado com sucesso!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='inputs'>
          <div className='input'>
            <input
              type='text'
              placeholder='Nome da ONG'
              name='ongNome'
              value={formData.ongNome}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <input
              type='text'
              placeholder='CNPJ da ONG'
              name='ongCnpj'
              value={formData.ongCnpj}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <input
              type='number'
              placeholder='Quantidade de Funcionários'
              name='ongQtdFunc'
              value={formData.ongQtdFunc}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <input
              type='text'
              placeholder='UF'
              name='uf'
              value={formData.uf}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <input
              type='text'
              placeholder='Cidade'
              name='cidade'
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </div>
          <div className='submit-container'>
            <button type='submit' className='submit'>Cadastrar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default cadastrarONGS;
