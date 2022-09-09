import { Fragment } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";

const SkillList = () => {
  const portfolio = usePortfolio().portfolio;
  if (!portfolio.skills) return null;

  return (
    <>
      {Object.entries(portfolio.skills).map(([key, skill]) => (
        <Fragment key={key}>
          {skill.icon && <strong>{key}:</strong>}
          <span className="skill icon">
            {skill.icon ?? skill.name ?? key}
            <span className="skill-level">{skill.level}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
};

export { SkillList };
