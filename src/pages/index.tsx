import Head from "next/head";
import { Fragment } from "react";
import CareerPage from "../component/CareerPage";




export default function Home() {
    return (
      <>
        <Head>
          <title>Flipr Innovation Labs</title>
        </Head>
        <Fragment>
            <CareerPage/>
        </Fragment>
      </>
    );
  }
  