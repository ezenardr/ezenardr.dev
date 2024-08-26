import Head from "next/head";
import { Fragment, memo, useContext } from "react";
import { Context } from "../context/context";
import Preloader from "./Preloader";
import Switcher from "./Switcher";

const Layout = ({ children }) => {
  const { color } = useContext(Context);
  return (
    <Fragment>
      <Head>
        <title>Rodolphe E. - Personal Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
          rel="stylesheet"
        />

        {/* <!-- Template CSS Files --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/jquery.animatedheadline.css"
        />
        <link rel="stylesheet" type="text/css" href="css/materialize.min.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href={`css/skins/${color}.css`}
        />

        <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
        <link rel={'icon'} type={'image/ico'} href={'favicon.ico'} />
        <meta property={'og:title'} content={'Rodolphe E. - Personal Portfolio'} />
        <meta property={'og:image'} content={'https://ezenardr.dev/opengraph.png'}/>
        <meta property={'og:url'} content={'https://ezenardr.dev'}/>
        <meta property={'og:description'} content={'Not sure where to start with your web project? I provide expert advice and consultation. I\'ll guide you through every step of the process.'} />
      </Head>
      <Preloader />
      {/*<Switcher />*/}
      <div className="wrapper">{children}</div>
    </Fragment>
  );
};
export default memo(Layout);
