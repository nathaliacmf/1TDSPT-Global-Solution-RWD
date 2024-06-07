'use client'
import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const apresONGS = () => {
  const [apiFailed, setApiFailed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('/api/check-status'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('API failed');
        }
      } catch (error) {
        setApiFailed(true);
      }
    };

    checkApiStatus();
  }, []);

  const handleRedirect = () => {
    router.push('/apresONGS2');
  };

  return (
    <div className="page-container">
      <Header />
      <div className="conteudo">
        <section className="conteudo-principal" style={{ backgroundImage: `url(${"/imgs/Back.jpg"})` }}>
          <div className="conteudo-principal-escrito">
            <h1 className="conteudo-principal-escrito-titulo">Conheça algumas ONGs que estão na luta contra os plásticos nos mares.</h1>
          </div>
        </section>
        <section className="conteudo-secundario">
          <h3 className="conteudo-secundario-titulo">Conheça algumas ONGs:</h3>
          <div className="ongs-lista">
            <div className="ong-card">
              <h4 className="ong-nome">Oceânica</h4>
              <p className="ong-descricao">Tem como missão cuidar da vida no litoral e do oceano, em toda a sua diversidade.</p>
              <a href="https://oceanica.org.br" target="_blank" className="ong-link">Saiba mais</a>
            </div>
            <div className="ong-card">
              <h4 className="ong-nome">Projeto Tamar</h4>
              <p className="ong-descricao">Tem como missão promover a recuperação das tartarugas marinhas, desenvolvendo ações de pesquisa, conservação e inclusão social.</p>
              <a href="https://www.tamar.org.br" target="_blank" className="ong-link">Saiba mais</a>
            </div>
            <div className="ong-card">
              <h4 className="ong-nome">EcoFaxina</h4>
              <p className="ong-descricao">Combatendo a poluição marinha por meio da elaboração de projetos, desenvolvimento de pesquisas e promoção de políticas públicas para a redução do aporte de plástico no oceano, tendo como estratégia principal a contenção de resíduos sólidos flutuantes, a recuperação de áreas degradadas e a redução de ocupações irregulares em áreas de preservação permanente.</p>
              <a href="https://www.institutoecofaxina.org.br/o-instituto" target="_blank" className="ong-link">Saiba mais</a>
            </div>
            <div className="ong-card">
              <h4 className="ong-nome">AQUASIS – Associação de Pesquisa e Preservação de Ecossistemas Aquáticos</h4>
              <p className="ong-descricao">É uma instituição comprometida não apenas com a conservação de espécies ameaçadas de extinção, como também tem o objetivo de fomentar ações que promovam o protagonismo das comunidades locais, ampliando seu potencial de desenvolvimento sustentável, trabalhando sempre em parceria com lideranças e membros do poder público dos município onde suas bases se encontram.</p>
              <a href="https://www.aquasis.org" target="_blank" className="ong-link">Saiba mais</a>
            </div>
            <div className="ong-card">
              <h4 className="ong-nome">Instituto Biota de Conservação</h4>
              <p className="ong-descricao">Com a missão de promover a conservação da fauna marinha e seu habitat, com foco em mamíferos e tartarugas.</p>
              <a href="https://www.institutobiota.org.br" target="_blank" className="ong-link">Saiba mais</a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default apresONGS;
