import '../styles/styles.css';
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <div className="cabecalho">
      <img className="cabecalho-imagem" src="/imgs/logo-branca-preta.png" alt="Logo" />
      <nav>
      <div className="cabecalho-menu">
        <Link href="/" className="cabecalho-menu-item">Página Inicial</Link>
        <Link href="/sobreNOS" className="cabecalho-menu-item">Sobre nós</Link>
        <Link href="/apresONGS" className="cabecalho-menu-item">ONGs</Link>
        <Link href="/cadastrar" className="cabecalho-menu-item">Cadastro</Link>
        <Link href="/cadastrarONGS" className="cabecalho-menu-item">Cadastre sua ONG</Link>
      </div>
      </nav>
    </div>

    </>
  );
};

export default Header;
