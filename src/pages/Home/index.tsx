import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container py-3">
        <div className="jumbotron">
          <h1 className="display-4">My-Sales</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr />
          <p>Esta aplicação consiste em exibir um dashboard de dados.</p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Acessar DashBoard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
