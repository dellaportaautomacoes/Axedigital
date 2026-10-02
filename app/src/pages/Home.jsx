import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import dados from "../data/pontos.json";

function Home() {
  const [pontoSelecionado, setPontoSelecionado] = useState(null);

  return (
    <div>
      <Header />
      <SearchBar />
      <CategoryCard />

      <section>
        <h2>Pontos ({dados.pontos.length})</h2>
        <ul>
          {dados.pontos.map((ponto) => (
            <li key={ponto.id}>
              <button onClick={() => setPontoSelecionado(ponto)}>
                {ponto.nome} - {ponto.categoria}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {pontoSelecionado && (
        <section>
          <h3>{pontoSelecionado.nome}</h3>
          <p>
            Categoria: {pontoSelecionado.categoria} | Tipo:{" "}
            {pontoSelecionado.origem}
          </p>
          {pontoSelecionado.letra.length > 0 ? (
            <div>
              {pontoSelecionado.letra.map((verso, indice) => (
                <p key={indice}>{verso}</p>
              ))}
            </div>
          ) : (
            <p>Letra ainda não cadastrada.</p>
          )}
        </section>
      )}
    </div>
  );
}

export default Home;