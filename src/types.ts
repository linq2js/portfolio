import { CSSProperties, ReactNode } from "react";

export type TokenType =
  | "keyword"
  | "string"
  | "unknown"
  | "identifier"
  | "property"
  | "variable"
  | "comment";

export type PortfolioStyles = {
  [key in TokenType | "element" | "children"]?: string | CSSProperties;
};

export type SkillItem = {
  name?: string;
  icon?: ReactNode;
  level?: string;
};

export type WorkItem = {
  name?: string;
  icon?: ReactNode;
  description?: ReactNode;
  stack?: ReactNode;
  from?: Date;
  to?: Date;
  url?: string;
  sort?: number;
  index?: number;
};

export type SocialLinkItem = {
  url: string;
  icon?: ReactNode;
};

export type Portfolio = {
  headline?: ReactNode;
  about?: ReactNode;
  work?: Record<string, WorkItem>;
  links?: Record<string, SocialLinkItem>;
  skills?: Record<string, SkillItem>;
};
