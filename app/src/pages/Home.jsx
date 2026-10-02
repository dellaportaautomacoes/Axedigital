import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      
      <CategoryCard
         icon="🌿"
         title="Caboclos"
         description="Pontos Cantados de Caboclos"
      />
    </div>
  );
}

export default Home;