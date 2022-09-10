import "./App.scss";

import { NoPrint } from "./comps/NoPrint";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { portfolio } from "./data/portfolio";

const App = () => {
  return (
    <div className="App">
      <NoPrint>
        <div className="bg-effect">
          <div className="bg-effect-1"></div>
          <div className="bg-effect-2"></div>
        </div>
      </NoPrint>

      <PortfolioProvider portfolio={portfolio} />
    </div>
  );
};

export default App;
