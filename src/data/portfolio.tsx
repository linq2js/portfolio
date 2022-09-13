import { ElementToken } from "../comps/ElementToken";
import { Portfolio } from "../types";
import { FiGithub, FiHome, FiLinkedin } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws, FaReact } from "react-icons/fa";
import {
  SiApollographql,
  SiAzurefunctions,
  SiCss3,
  SiD3Dotjs,
  SiDotnet,
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
  SiMysql,
  SiPrisma,
  SiRedis,
  SiRedux,
  SiReduxsaga,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { StackIcon } from "../comps/StackIcon";
import { Fragment } from "react";

const tags = {
  javascript: <StackIcon type="Javascript" icon={<SiJavascript />} />,
  apollo: <StackIcon type="Apollog" icon={<SiApollographql />} />,
  typescript: <StackIcon type="Typescript" icon={<SiTypescript />} />,
  html5: <StackIcon type="HTML5" icon={<SiHtml5 />} />,
  css3: <StackIcon type="CSS3" icon={<SiCss3 />} />,
  tailwind: <StackIcon type="TailwindCSS" icon={<SiTailwindcss />} />,
  react: <StackIcon type="React" icon={<FaReact />} />,
  react_query: <StackIcon type="ReactQuery" icon="ReactQuery" />,
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
  mysql: <StackIcon type="MySQL" icon={<SiMysql />} />,
  dart: <StackIcon type="Dart" icon="Dart" />,
  open_source: <StackIcon type="OpenSource" icon="OpenSource" />,
  dot_net: <StackIcon type=".NET" icon={<SiDotnet />} />,
  redis: <StackIcon type="Redis" icon={<SiRedis />} />,
  nx: <StackIcon type="Nx" icon="Nx" />,
  d3: <StackIcon type="D3" icon={<SiD3Dotjs />} />,
  iot: <StackIcon type="IOT" icon="IOT" />,
  mongo_db: <StackIcon type="MongoDB" icon={<SiMongodb />} />,
  prisma: <StackIcon type="Prisma" icon={<SiPrisma />} />,
  react_native: <StackIcon type="ReactNative" icon={<FaReact />} />,
  flutter: <StackIcon type="Flutter" icon={<SiFlutter />} />,
  expo: <StackIcon type="Expo" icon={<SiExpo />} />,
  electron: <StackIcon type="Electron" icon={<SiElectron />} />,
};

const npmPackages = [
  "apidefs",
  "apiiz",
  "aposto",
  "app-sm",
  "appflow",
  "azapi",
  "azux",
  "canvas-x",
  "cbor-wrapper",
  "cubis",
  "cubiz",
  "deflux",
  "domk",
  "domux",
  "ezcontext",
  "ezflow",
  "ezync",
  "flovv",
  "flow-fp",
  "flux-native",
  "fluxez",
  "fluxor",
  "fomx",
  "formax-test",
  "formk",
  "funcex",
  "gramod",
  "hez",
  "hookex",
  "hta",
  "httpex",
  "hypereact",
  "ijob",
  "imez",
  "imh",
  "imj",
  "immhelper",
  "imstate",
  "ini-merge",
  "iscope",
  "istate",
  "lidux",
  "linq2fire",
  "lodat",
  "mapex",
  "mapez",
  "memosel",
  "minsto",
  "moduz",
  "monostore",
  "niq",
  "norarg",
  "pipx",
  "qflux",
  "querj",
  "qumu",
  "react-appflow",
  "react-charm",
  "react-compx",
  "react-cubis",
  "react-enhancer",
  "react-istate",
  "react-monostore",
  "react-mx",
  "react-query-global-state",
  "react-smx",
  "react-tini",
  "react-tinis",
  "react-xs",
  "reactfunc",
  "reanim",
  "reasc",
  "reatomic",
  "reaxn",
  "reblok",
  "recallback",
  "redat",
  "redez",
  "redukit",
  "redux-thunk-plus",
  "reez",
  "rejet",
  "remos",
  "remos-immer",
  "reskin",
  "rewow",
  "rexq",
  "rezux",
  "rmin",
  "rtkex",
  "rxa",
  "rxapp",
  "rxmod",
  "smx",
  "smz",
  "stateapi",
  "stonix",
  "storeact",
  "stoze",
  "stylek",
  "styman",
  "temx",
  "tenx",
  "tidux",
  "tinis",
  "tinux",
  "tte",
  "ultralist",
  "use-scope",
  "usestable",
  "valx",
  "vue-istate",
  "weeflux",
  "weeflux-partial-reducer",
  "xlist",
  "yml2jdc",
];

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
    HomePage: {
      url: "https://linq2js.github.io/portfolio/",
      icon: <FiHome />,
    },
    Github: {
      url: "https://github.com/linq2js",
      icon: <FiGithub />,
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/hung-nguyen-1595976b/",
      icon: <FiLinkedin />,
    },
  },
  skills: {
    Scripting: {
      icon: (
        <>
          {tags.javascript}
          {tags.typescript}
          {tags.html5}
          {tags.css3}
          {tags.tailwind}
        </>
      ),
      level: "Expert",
    },
    React: {
      icon: (
        <>
          {tags.react}
          {tags.redux}
          {tags.react_query}
          {tags.nextjs}
          {tags.redux_saga}
          {tags.styled_component}
          {tags.jss}
          {tags.apollo}
        </>
      ),
      level: "Expert",
    },
    Server: {
      icon: (
        <>
          {tags.nodejs}
          {tags.express}
          {tags.socket_io}
          {tags.graphql}
          {tags.apollo}
        </>
      ),
      level: "Expert",
    },
    Cloud: {
      icon: (
        <>
          {tags.azure}
          {tags.azure_functions}
          {tags.aws}
          {tags.gcp}
        </>
      ),
      level: "Expert",
    },
    Testing: {
      icon: (
        <>
          {tags.jest}
          {tags.mocha}
        </>
      ),
      level: "Expert",
    },
    Repo: {
      icon: (
        <>
          {tags.yarn}
          {tags.npm}
          {tags.lerna}
          {tags.nx}
        </>
      ),
      level: "Experienced",
    },
    Database: {
      icon: (
        <>
          {tags.mongo_db}
          {tags.prisma}
        </>
      ),
      level: "Experienced",
    },
    Mobile: {
      icon: (
        <>
          {tags.react_native}
          {tags.flutter}
          {tags.expo}
        </>
      ),
      level: "Experienced",
    },
    Desktop: {
      icon: <>{tags.electron}</>,
      level: "Experienced",
    },
  },
  work: {
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
          {tags.react}
          {tags.react_query}
          {tags.nextjs}
          {tags.flutter}
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
          <strong>Roles:</strong> Technical Architecture, Frontend Developer,
          Backend Developer
        </>
      ),
      stack: (
        <>
          {tags.react}
          {tags.phaser}
          {tags.nodejs}
          {tags["dot_net"]}
          {tags.mssql}
          {tags.socket_io}
          {tags.mongo_db}
        </>
      ),
    },
    CTRWOW: {
      description: (
        <>
          <strong>
            Created By Performance Marketers Who Care About Performance
          </strong>
          <br />
          CTRwow is an enterprise-level content management system with full
          funnel-building, analytics and tracking designed specifically for
          advertisers, affiliates, media buyers, and others in the performance
          marketing industry. CTRwow is an approved sales channel for Shopify
          allowing easy and full integration to Shopify.
          <strong>Platform:</strong> Web
          <br />
          <strong>Roles:</strong> Team Lead, Frontend Developer
        </>
      ),
      stack: (
        <>
          {tags.react}
          {tags.dot_net}
          {tags.azure}
          {tags.azure_functions}
          {tags.mongo_db}
        </>
      ),
    },
    CollaborationDashboard: {
      name: "Collaboration Dashboard",
      description: (
        <>
          <strong>A powerful tool for presentation and analytics data</strong>
          <br />
          Most business applications have some kind of dashboard that gives a
          top-level view of various functions, but there is a problem with these
          dashboards. We think we have built something that can solve it. It
          includes a bundle of modules:
          <ul>
            <li>User Management</li>
            <li>Dashboard Management</li>
            <li>Messenger</li>
            <li>Document Management</li>
            <li>Geofence Management</li>
            <li>Presentation Management</li>
            <li>Alert / Notification</li>
            <li>Report Builder</li>
          </ul>
          <strong>Platform:</strong> Web
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.react}
          {tags.dot_net}
          {tags.redis}
          {tags.mongo_db}
          {tags.mssql}
          {tags.mysql}
          {tags.d3}
        </>
      ),
    },
    InfinitiKloud: {
      url: "https://www.infinitikloud.com/download-app.html",
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
          {tags.react_native}
          {tags.azure}
          {tags.azure_functions}
          {tags.nodejs}
          {tags.mongo_db}
          {tags.electron}
          {tags.iot}
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
          {tags.react_native}
          {tags.azure}
          {tags.azure_functions}
          {tags.nodejs}
          {tags.mongo_db}
          {tags.iot}
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
          {tags.react_native}
          {tags.firebase}
          {tags.azure}
          {tags.azure_functions}
          {tags.nodejs}
          {tags.mongo_db}
          {tags.iot}
        </>
      ),
    },
    Nerlos: {
      url: "https://apps.apple.com/vn/app/nerlos/id1531683195",
      description: (
        <>
          <strong>Nerlos Smart Tag & Key Finder</strong>
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
          {tags.react_native}
          {tags.firebase}
          {tags.azure}
          {tags.azure_functions}
          {tags.nodejs}
          {tags.mongo_db}
          {tags.iot}
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
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.vscode}
          {tags.typescript}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Rativ: {
      url: "https://www.npmjs.com/package/rativ",
      description: (
        <>
          <strong>A React library for creating reactive components</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.react}
          {tags.typescript}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Domez: {
      url: "https://www.npmjs.com/package/domez",
      description: (
        <>
          <strong>A tiny lib for DOM rendering</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Memosel: {
      url: "https://www.npmjs.com/package/memosel",
      description: (
        <>
          <strong>A library for creating memoized "selector" functions</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Rtkex: {
      url: "https://www.npmjs.com/package/rtkex",
      description: (
        <>
          <strong>An extension for Redux Toolkit</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.react}
          {tags.redux}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Styman: {
      url: "https://www.npmjs.com/package/styman",
      description: (
        <>
          <strong>Styling your app with ease</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.react}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Apiiz: {
      url: "https://www.npmjs.com/package/apiiz",
      description: (
        <>
          <strong>Create API mappings with ease</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
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
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
        </>
      ),
    },
    Rexq: {
      url: "https://www.npmjs.com/package/rexq",
      description: (
        <>
          <strong>Extensible Query for REST API</strong>
          <br />
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.typescript}
          {tags.graphql}
          {tags.lerna}
          {tags.jest}
          {tags.npm}
          {tags.open_source}
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
          <strong>Roles:</strong> Main Developer
        </>
      ),
      stack: (
        <>
          {tags.dart}
          {tags.flutter}
          {tags.open_source}
        </>
      ),
    },
    "Other Projects": {
      description: (
        <>
          <h3>NPM Packages:</h3>
          {npmPackages.map((name) => (
            <Fragment key={name}>
              {name}:{" "}
              <a href={`https://www.npmjs.com/package/${name}`}>
                https://www.npmjs.com/package/{name}
              </a>
              <br />
            </Fragment>
          ))}
        </>
      ),
    },
  },
};

export { portfolio };
