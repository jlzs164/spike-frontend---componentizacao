import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <main>
        <Card
          title="Sobre o projeto"
          description="Esta página foi desenvolvida como parte da atividade Spike 3, com o objetivo de praticar a criação de interfaces usando React."
          />

        <Card
          title="O que estou aprendendo"
          description="Estou aprendendo a dividir páginas em componentes menores, reutilizar elementos e personalizar o conteúdo por meio de propriedades chamadas props."
        />

        <Card
          title="Como a página funciona"
          description="A página é organizada em componentes que formam uma interface."
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;