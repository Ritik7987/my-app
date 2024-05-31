import Head from "next/head";
import { Fragment } from "react";
import CareerPage from "../component/CareerPage";
import Header from "@/component/career-page/Header";
import Placements from "@/component/career-page/Placements";
import JobOpening from "@/component/career-page/Openings";
import Lifeat from "@/component/career-page/Lifeat";




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
  