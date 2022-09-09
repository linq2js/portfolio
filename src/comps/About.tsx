import { usePortfolio } from "../contexts/PortfolioContext";

const About = () => {
  const portfolio = usePortfolio().portfolio;
  return <>{portfolio.about}</>;
};

export { About };
