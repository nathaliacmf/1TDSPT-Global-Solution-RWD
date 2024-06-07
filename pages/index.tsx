"use client"

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="page-container">
      <Header />
      <main className="conteudo">
        <section className="conteudo-principal" style={{ backgroundImage: `url(${"/imgs/fundo-animais-mar.jpg"})` }}>
          <div className="conteudo-principal-escrito">
            <h1 className="conteudo-principal-escrito-titulo">Brasil gera 3,44 milhões de toneladas anuais de lixo plástico que podem chegar ao Atlântico.</h1>
            <h2 className="conteudo-principal-escrito-subtitulo">
              Campanha de entidades civis quer acelerar a aprovação de um projeto de lei que cria uma “economia circular” desses resíduos.
            </h2>
          </div>
        </section>
        <section className="conteudo-secundario centralizado">
          <h3 className="conteudo-secundario-titulo">Os 5.570 municípios brasileiros geram 3,44 milhões de toneladas anuais de resíduos plásticos que podem acabar no Atlântico.</h3>
          <p className="conteudo-secundario-paragrafo">
            A quantidade lotaria uma média de 344 mil caminhões de lixo.
          </p>
          <p className="conteudo-secundario-paragrafo">
            Isso mostra que ⅓ das 10,33 milhões de toneladas produzidas nacionalmente é mal gerenciado.
          </p>
          <p className="conteudo-secundario-paragrafo">
            Conforme o balanço publicado na revista científica Marine Pollution Bulletin, isso posiciona o país como o 16º que mais polui os mares e oceanos e entre os 20 principais geradores globais de resíduos plásticos de uso único.
          </p>
          <p className="conteudo-secundario-paragrafo" style={{ marginTop: '20px' }}>
            Os municípios que mais geram resíduos sem destino correto são Rio de Janeiro, São Paulo, Fortaleza e Salvador. Em quantidade de lixo por pessoa, os líderes são Arroio do Sal e Xangri-lá (RS), Ubatuba e Bertioga (SP).
          </p>
          <p className="conteudo-secundario-paragrafo">
            Outras regiões com grande potencial de poluição marinha são a Baixada Santista (SP), a Lagoa dos Patos (RS), a Baía da Guanabara (RJ), a foz do Rio Amazonas (AP/PA) e o delta do Parnaíba (PI/MA).
          </p>
          <p className="conteudo-secundario-paragrafo">
            Os resíduos podem chegar ao oceano pela drenagem urbana, esgotos, córregos e rios. A probabilidade de transporte no território brasileiro é baixa-média, mas cresce desde os municípios litorâneos.
          </p>
          <p className="conteudo-secundario-paragrafo">
            Atentas à crise nacional e global do lixo nos mares e oceanos, mais de 60 organizações da sociedade civil lançaram esta semana a campanha Pare o Tsunami de Plástico.
          </p>
          <p className="conteudo-secundario-paragrafo">
            Entre as pautas, as ongs esperam que Congresso acelere a aprovação do Projeto de Lei 2524/2022. O texto cria as bases legais para que o país tenha uma “economia circular” dos plásticos.
          </p>
          <p className="conteudo-secundario-paragrafo">
            A proposta, informa a ong Oceana Brasil, prevê o fim da produção de plásticos descartáveis e que todo produto industrializado desse tipo deverá ser reutilizável, reciclável ou compostável.
          </p>
          <p className="conteudo-secundario-paragrafo">
            Segundo as Nações Unidas, de um a dois caminhões de lixo plástico são despejados por minuto nos mares e oceanos mundiais. Essa poluição ameaça os ambientes naturais e a saúde humana.
          </p>
          <p className="conteudo-secundario-paragrafo">
            Cientistas já encontraram microplásticos no leite, na placenta, no pulmão e no sangue humanos.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
