import Head from "next/head";
import { Fragment } from "react";
import CareerPage from "../component/CareerPage";
import Header from "@/component/career-page/components/Header";
import Placements from "@/component/career-page/components/Placements";
import JobOpening from "@/component/career-page/components/Openings";
import Lifeat from "@/component/career-page/components/Lifeat";




export default function Home() {
    return (
      <>
        <Head>
          <title>Flipr Innovation Labs</title>
        </Head>
        <Fragment>
            {/* <CareerPage/> */}
            <Header/>
            <Placements/>
            <JobOpening/>
            <Lifeat/>
        </Fragment>
      </>
    );
  }
  