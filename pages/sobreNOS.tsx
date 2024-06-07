import React from 'react';
import Header from '../components/Header';
import '../styles/styles.css';
import Footer from '../components/Footer';

const sobreNOS = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="conteudo">
        <section className="conteudo-principal" style={{ backgroundImage: `url(/imgs/Turtle.jpg)` }}>
          <div className="conteudo-principal-escrito">
            <h1 className="conteudo-principal-escrito-titulo">Sobre Nós.</h1>
            <h2 className="conteudo-principal-escrito-subtitulo">
              Conheça nossa missão, visão e valores.
            </h2>
          </div>
        </section>

        <section className="conteudo-secundario">
          <h3 className="conteudo-secundario-titulo">Nossa Missão</h3>
          <p className="conteudo-secundario-paragrafo">Nossa missão é conscientizar a população sobre a poluição marinha, especialmente a causada por plásticos, e promover ações efetivas para a preservação dos oceanos. Acreditamos que através da educação e da mobilização comunitária, podemos reduzir significativamente o impacto dos resíduos plásticos nos ecossistemas marinhos e garantir um futuro mais sustentável para as próximas gerações.</p>
          <h3 className="conteudo-secundario-titulo">Nossa Visão</h3>
          <p className="conteudo-secundario-paragrafo">Visamos um mundo onde os oceanos estejam livres da poluição plástica e onde todas as comunidades estejam engajadas na proteção dos recursos marinhos. Sonhamos com mares limpos e saudáveis, repletos de vida, onde a biodiversidade possa prosperar sem a ameaça constante do lixo plástico. Queremos ser líderes globais na luta contra a poluição marinha, inspirando mudanças duradouras nas políticas ambientais e nos comportamentos individuais.</p>
          <h3 className="conteudo-secundario-titulo">Nossos Valores</h3>
          <p className="conteudo-secundario-paragrafo"><strong>Sustentabilidade:</strong> Promovemos práticas e soluções que garantam a preservação dos oceanos e a redução do uso de plásticos descartáveis.</p>
          <p className="conteudo-secundario-paragrafo"><strong>Educação:</strong> Acreditamos que a conscientização é o primeiro passo para a mudança. Oferecemos programas educativos para todas as idades sobre os impactos dos plásticos nos mares e formas de reduzir nosso impacto ambiental.</p>
          <p className="conteudo-secundario-paragrafo"><strong>Comunidade:</strong> Valorizamos a união e a colaboração. Trabalhamos em parceria com voluntários, escolas, empresas e governos para alcançar nossos objetivos.</p>
          <p className="conteudo-secundario-paragrafo"><strong>Inovação:</strong> Buscamos constantemente novas tecnologias e métodos para combater a poluição marinha de maneira eficaz.</p>
          <p className="conteudo-secundario-paragrafo"><strong>Transparência:</strong> Atuamos de forma ética e transparente, prestando contas à sociedade sobre nossas ações e resultados. Respeito ao Meio Ambiente: Cada uma de nossas ações é guiada pelo respeito e cuidado com a natureza, reconhecendo a importância vital dos oceanos para a vida no planeta.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default sobreNOS;
