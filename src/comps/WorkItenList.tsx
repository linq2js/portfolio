import { useMemo } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import { Printable } from "./Printable";
import { AiOutlineProject } from "react-icons/ai";

const WorkItenList = () => {
  const portfolio = usePortfolio().portfolio;
  const normalizedWorkItems = useMemo(() => {
    const workItems = portfolio.work ?? {};
    return Object.entries(workItems)
      .map(([key, value], index) => ({
        name: key,
        index,
        ...value,
      }))
      .sort((a, b) => {
        if (typeof a.sort !== "undefined" || typeof b.sort !== "undefined") {
          return (a.sort ?? 0) - (b.sort ?? 0);
        }

        if (a.to && b.to) {
          return a.to.getTime() - b.to.getTime();
        }
        if (a.to) return 1;
        if (b.to) return -1;

        if (a.from && b.from) {
          return a.from.getTime() - b.from.getTime();
        }
        if (a.from) return 1;
        if (b.from) return -1;

        return (a.index ?? 0) - (b.index ?? 0);
      });
  }, [portfolio.work]);

  return (
    <>
      {normalizedWorkItems.map((workItem, index) => (
        <div className="work-item" key={index}>
          <h2 className="work-name">
            <AiOutlineProject /> {workItem.name}
          </h2>
          {workItem.url && (
            <a className="work-url" href={workItem.url} target="_blank">
              {workItem.url}
            </a>
          )}
          <div>{workItem.description}</div>

          {workItem.stack && (
            <div className="work-stack">
              <Printable>
                <strong>Stack: </strong>
              </Printable>
              {workItem.stack}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export { WorkItenList };
