import Footer from "./components/Footer";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="bg-gray-200">
      <Header />
      <Header2 />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
