import Header from "./components/Header/Header";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:h-6/7 flex justify-center items-center">
        <Dashboard />
      </div>
    </>
  )
}
