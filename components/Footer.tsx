import '../styles/styles.css';

const Footer = () => {
  return (
    <footer className="rodape">
      <img className="rodape-imagem" src={"/imgs/logo-branca-preta.png"} alt="Logo" />
      <div className="rodape-info">
        <p>&copy; 2024 Oceanes. Todos os direitos reservados.</p>
        <p> 1TDSPT</p>
            <p>RM 553233 - Nathalia Comeron Freire</p>
            <p>RM 552669 - Maria Beatriz Reis Fogolin De Godoy</p>
            <p>RM 552744 - Nicholas Pereira Paulo Barbosa Lima</p>
      </div>
    </footer>
  );
};

export default Footer;
