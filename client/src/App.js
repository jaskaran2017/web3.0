import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Transactions from "./Components/Transactions";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};
export default App;
