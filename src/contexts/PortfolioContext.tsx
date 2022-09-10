import { createContext, PropsWithChildren, useContext } from "react";
import { About } from "../comps/About";
import { Contact } from "../comps/Contact";
import { ElementToken } from "../comps/ElementToken";
import { Modal } from "../comps/Modal";
import { NoPrint } from "../comps/NoPrint";
import { Page } from "../comps/Page";
import { SkillList } from "../comps/SkillList";
import { SocialLink } from "../comps/SocialLink";
import { C } from "../comps/Token";
import { WorkItenList } from "../comps/WorkItenList";
import { Portfolio, PortfolioStyles } from "../types";

export type PortfolioContext = {
  portfolio: Portfolio;
  styles?: PortfolioStyles;
};

export type Props = PropsWithChildren<{
  portfolio: Portfolio;
  styles?: PortfolioStyles;
}>;

const context = createContext<PortfolioContext | undefined>(undefined);

const PortfolioProvider = ({ portfolio, styles }: Props) => {
  return (
    <context.Provider value={{ portfolio, styles }}>
      <Modal type="MyPortfolio" inline show>
        {portfolio.headline}
        {portfolio.links && (
          <>
            {Object.keys(portfolio.links).map((key) => (
              <SocialLink key={key} type={key} {...portfolio.links![key]} />
            ))}
            <NoPrint>
              <br />
            </NoPrint>
          </>
        )}
        {C("Click on the below element to see its details", true)}
        <br />
        <Page type="About">
          <About />
        </Page>
        <br />
        <Page type="Skills">
          <SkillList />
        </Page>
        <br />
        <Page type="Work">
          <WorkItenList />
        </Page>
        <br />
        <NoPrint>
          <Page type="Contact">
            <Contact />
          </Page>
        </NoPrint>
      </Modal>
    </context.Provider>
  );
};

const usePortfolio = () => {
  const porfolio = useContext(context);
  if (!porfolio) throw new Error("No portfolio provided");
  return porfolio;
};

const useStyle = <S extends keyof PortfolioStyles>(
  style: S
): PortfolioStyles[S] | string => {
  const portfolio = usePortfolio();
  return portfolio.styles ? portfolio.styles[style] : style;
};

export { PortfolioProvider, usePortfolio, useStyle };
