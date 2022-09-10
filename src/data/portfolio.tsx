import { ElementToken } from "../comps/ElementToken";
import { Portfolio } from "../types";
import { animate } from "../utils/animate";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws, FaReact } from "react-icons/fa";
import {
  SiAzurefunctions,
  SiCss3,
  SiElectron,
  SiExpo,
  SiExpress,
  SiFlutter,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJss,
  SiMicrosoftazure,
  SiMocha,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiReduxsaga,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { StackIcon } from "../comps/StackIcon";

const stack = {
  javascript: <StackIcon type="Javascript" icon={<SiJavascript />} />,
  typescript: <StackIcon type="Typescript" icon={<SiTypescript />} />,
  html5: <StackIcon type="HTML5" icon={<SiHtml5 />} />,
  css3: <StackIcon type="CSS3" icon={<SiCss3 />} />,
  tailwind: <StackIcon type="TailwindCSS" icon={<SiTailwindcss />} />,
  react: <StackIcon type="React" icon={<FaReact />} />,
  redux: <StackIcon type="Redux" icon={<SiRedux />} />,
  nextjs: <StackIcon type="NextJS" icon={<TbBrandNextjs />} />,
  redux_saga: <StackIcon type="ReduxSaga" icon={<SiReduxsaga />} />,
  styled_component: (
    <StackIcon type="StyledComponent" icon={<SiStyledcomponents />} />
  ),
  jss: <StackIcon type="JSS" icon={<SiJss />} />,
  nodejs: <StackIcon type="NodeJS" icon={<FaNodeJs />} />,
  express: <StackIcon type="ExpressJS" icon={<SiExpress />} />,
  graphql: <StackIcon type="GraphQL" icon={<SiGraphql />} />,
  azure: <StackIcon type="Azure" icon={<SiMicrosoftazure />} />,
  azure_functions: (
    <StackIcon type="AzureFunctions" icon={<SiAzurefunctions />} />
  ),
  aws: <StackIcon type="AWS" icon={<FaAws />} />,
  gcp: <StackIcon type="GCP" icon={<SiGooglecloud />} />,
  jest: <StackIcon type="Jest" icon={<SiJest />} />,
  mocha: <StackIcon type="Mocha" icon={<SiMocha />} />,
  vscode: <StackIcon type="VsCode" icon="VsCode" />,
  npm: <StackIcon type="Npm" icon="Npm" />,
  yarn: <StackIcon type="Yarn" icon="Yarn" />,
  lerna: <StackIcon type="Lerna" icon="Lerna" />,
  firebase: <StackIcon type="Firebase" icon="Firebase" />,
  phaser: <StackIcon type="Phaser" icon="Phaser" />,
  socket_io: <StackIcon type="SocketIO" icon="SocketIO" />,
  mssql: <StackIcon type="MSSQL" icon="MSSQL" />,
  dart: <StackIcon type="Dart" icon="Dart" />,
  "c#": <StackIcon type="C#" icon="C#" />,
  nx: <StackIcon type="Nx" icon="Nx" />,
  mongo_db: <StackIcon type="MongoDB" icon={<SiMongodb />} />,
  prisma: <StackIcon type="Prisma" icon={<SiPrisma />} />,
  react_native: <StackIcon type="ReactNative" icon={<FaReact />} />,
  flutter: <StackIcon type="Flutter" icon={<SiFlutter />} />,
  expo: <StackIcon type="Expo" icon={<SiExpo />} />,
  electron: <StackIcon type="Electron" icon={<SiElectron />} />,
};

const portfolio: Portfolio = {
  headline: (
    <h3>
      Hi, <br />
      I'm Hung Nguyen,
      <br />
      Fullstack Developer
    </h3>
  ),
  about: (
    <>
      <ElementToken type="PersonalDetails">
        <ElementToken type="FullName">Nguyen Quang Hung</ElementToken>
        <ElementToken type="Email">linqtojs@gmail.com</ElementToken>
        <ElementToken type="Phone">+84964517871</ElementToken>
        <ElementToken type="Languages">Vietnamese, English</ElementToken>
        <ElementToken type="Location">Viet Nam, HCMC</ElementToken>
      </ElementToken>
      <ElementToken type="ProfessionalSummary">
        A highly focused website/front-end developer with 15 years of experience
        in a variety of development and engineering positions. Organized,
        methodical, and with a keen eye for detail results in solid coding and a
        trustworthy website developer. Understanding client requirements and
        communicating the progress of projects are core values in achieving
        long-lasting business relationships. The students can play with each
        other and gain more experiences
      </ElementToken>
    </>
  ),
  links: {
    github: {
      url: "https://github.com/linq2js",
      icon: <FiGithub />,
    },
    linkedIn: {
      url: "https://www.linkedin.com/in/hung-nguyen-1595976b/",
      icon: <FiLinkedin />,
    },
  },
  skills: {
    Scripting: {
      icon: (
        <>
          {stack.javascript}
          {stack.typescript}
          {stack.html5}
          {stack.css3}
          {stack.tailwind}
        </>
      ),
      level: "Expert",
    },
    React: {
      icon: (
        <>
          {stack.react}
          {stack.redux}
          {stack.nextjs}
          {stack.redux_saga}
          {stack.styled_component}
          {stack.jss}
        </>
      ),
      level: "Expert",
    },
    Server: {
      icon: (
        <>
          {stack.nodejs}
          {stack.express}
          {stack.socket_io}
          {stack.graphql}
        </>
      ),
      level: "Expert",
    },
    Cloud: {
      icon: (
        <>
          {stack.azure}
          {stack.azure_functions}
          {stack.aws}
          {stack.gcp}
        </>
      ),
      level: "Expert",
    },
    Testing: {
      icon: (
        <>
          {stack.jest}
          {stack.mocha}
        </>
      ),
      level: "Expert",
    },
    Repo: {
      icon: (
        <>
          {stack.yarn}
          {stack.npm}
          {stack.lerna}
          {stack.nx}
        </>
      ),
      level: "Experienced",
    },
    Database: {
      icon: (
        <>
          {stack.mongo_db}
          {stack.prisma}
        </>
      ),
      level: "Experienced",
    },
    Mobile: {
      icon: (
        <>
          {stack.react_native}
          {stack.flutter}
          {stack.expo}
        </>
      ),
      level: "Experienced",
    },
    Desktop: {
      icon: <>{stack.electron}</>,
      level: "Experienced",
    },
  },
  work: {
    InfinitiKloud: {
      url: "https://www.infinitikloud.com/",
      description: (
        <>
          <strong>The Easy, Secure Way to Keep Your Data Safe</strong>
          <br />
          Discover the one-click back-up device for your computer or phone that
          anyone can use
          <br />
          <strong>Platform:</strong> Desktop, Android, iOS
          <br />
          <strong>Roles:</strong> Technical Architecture, Team Lead, Frontend
          Developer, Backend Developer
        </>
      ),
      stack: (
        <>
          {stack.react_native}
          {stack.azure}
          {stack.azure_functions}
          {stack.nodejs}
          {stack.mongo_db}
          {stack.electron}
        </>
      ),
    },

    AutomendPro: {
      url: "https://www.buyautomendpro.com/",
      description: (
        <>
          <strong>
            Easily Diagnose Your Car’s Problem – Right from Your Cellphone!
          </strong>
          <br />
          The Helpful Tool that Connects to Your Vehicle for Honest Repair
          Advice
          <br />
          <strong>Platform:</strong> Android, iOS
          <br />
          <strong>Roles:</strong> Technical Architecture, Team Lead, Frontend
          Developer
        </>
      ),
      stack: (
        <>
          {stack.react_native}
          {stack.azure}
          {stack.azure_functions}
          {stack.nodejs}
          {stack.mongo_db}
        </>
      ),
    },
    Showwcase: {
      url: "https://www.showwcase.com/",
      description: (
        <>
          <strong>
            A brand new way to engage and connect across the world
          </strong>
          Showwcase is a network built for coders. It's a platform to connect,
          share knowledge, code, what you're working on, gain feedback, learn,
          ask questions and find new opportunities in the tech community.
          <br />
          <strong>Platform:</strong> Web, Android, iOS
          <br />
          <strong>Roles:</strong> Frontend Developer
        </>
      ),
      stack: (
        <>
          {stack.react}
          {stack.nextjs}
          {stack.flutter}
        </>
      ),
    },
    YehYeh: {
      url: "https://play.google.com/store/apps/details?id=com.yehyeh.nfc&hl=en_AU&gl=US",
      description: (
        <>
          <strong>Share All Your Social Media With A Tap</strong>
          <br />
          YehYeh is the quick and easy way to share your social media links and
          contact info - all with just a tap. Do away with the chore of swapping
          contacts and trying to remember all your usernames with a simple tap
          of your phone.
          <br />
          <strong>Platform:</strong> Android, iOS
          <br />
          <strong>Roles:</strong> Technical Architecture, Team Lead, Frontend
          Developer, Backend Developer
        </>
      ),
      stack: (
        <>
          {stack.react_native}
          {stack.firebase}
          {stack.azure}
          {stack.azure_functions}
          {stack.nodejs}
          {stack.mongo_db}
        </>
      ),
    },
    Nerlos: {
      url: "https://apps.apple.com/vn/app/nerlos/id1531683195",
      description: (
        <>
          <strong>Nerlos Smart Tag & Key Finder 4+</strong>
          <br />
          Nerlos is the game-changer Bluetooth-enabled device tracker that
          combines a reliable app with a tiny device that turns it into a key
          finder, phone tracker, and all-around device locator at your
          fingertips.
          <br />
          <strong>Platform:</strong> Android, iOS
          <br />
          <strong>Roles:</strong> Technical Architecture, Team Lead, Frontend
          Developer
        </>
      ),
      stack: (
        <>
          {stack.react_native}
          {stack.firebase}
          {stack.azure}
          {stack.azure_functions}
          {stack.nodejs}
          {stack.mongo_db}
        </>
      ),
    },
    StarmathOnline: {
      url: "https://starmathsonline.com.au/",
      description: (
        <>
          <strong>
            It is Australia's first primary maths software to deliver a tailored
            learning experience to every child! It is fun, engaging and deliver
            results!
          </strong>
          <br />
          <strong>Platform:</strong> Web, Android, iOS
          <br />
          <strong>Roles:</strong> Technical Architecture, Team Lead, Frontend
          Developer, Backend Developer
        </>
      ),
      stack: (
        <>
          {stack.react}
          {stack.phaser}
          {stack.nodejs}
          {stack["c#"]}
          {stack.mssql}
          {stack.socket_io}
        </>
      ),
    },
    YMLGEN: {
      url: "https://marketplace.visualstudio.com/items?itemName=linq2js.ymlgen",
      description: (
        <>
          <strong>A generator for YML/YAML files</strong>
          <br />
          Generate one or many files from YML/YAML config file
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.vscode}
          {stack.typescript}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Rativ: {
      url: "https://www.npmjs.com/package/rativ",
      description: (
        <>
          <strong>A React library for creating reactive components</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.react}
          {stack.typescript}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Domez: {
      url: "https://www.npmjs.com/package/domez",
      description: (
        <>
          <strong>A tiny lib for DOM rendering</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Memosel: {
      url: "https://www.npmjs.com/package/memosel",
      description: (
        <>
          <strong>A library for creating memoized "selector" functions</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Rtkex: {
      url: "https://www.npmjs.com/package/rtkex",
      description: (
        <>
          <strong>An extension for Redux Toolkit</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.react}
          {stack.redux}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Styman: {
      url: "https://www.npmjs.com/package/styman",
      description: (
        <>
          <strong>Styling your app with ease</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.react}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Apiiz: {
      url: "https://www.npmjs.com/package/apiiz",
      description: (
        <>
          <strong>Create API mappings with ease</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Immhelper: {
      url: "https://www.npmjs.com/package/immhelper",
      description: (
        <>
          <strong>
            Fast and lightweight library helps you to update js objects without
            mutating them
          </strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Rexq: {
      url: "https://www.npmjs.com/package/rexq",
      description: (
        <>
          <strong>Extensible Query for REST API</strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.typescript}
          {stack.graphql}
          {stack.lerna}
          {stack.jest}
          {stack.npm}
        </>
      ),
    },
    Cubix: {
      url: "https://pub.dev/packages/cubix",
      description: (
        <>
          <strong>
            A predictable state management library that based on BLoc library.
            Easy to use and maintenance.
          </strong>
          <br />
          <strong>Roles:</strong> Developer
        </>
      ),
      stack: (
        <>
          {stack.dart}
          {stack.flutter}
        </>
      ),
    },
  },
};

export { portfolio };
