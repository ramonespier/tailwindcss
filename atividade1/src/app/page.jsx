import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Cards from "./components/Cards/Cards";

export default function Home() {
  return (
    <>
      <Header />

      <div className="md:h-6/7 flex justify-center items-center">
        <Dashboard />
      </div>

      <Cards />

    </>
  )
}
