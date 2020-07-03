import React from "react";
import Layout from '../components/layouts/Layout'
import Banner from "../components/home/banner/Banner";
import About from "../components/home/about/About";
import Offer from "../components/home/offer/Offer";
import Opportunities from "../components/home/opportunities/Opportunities";
import Price from "../components/home/price/Price";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Banner/>
    <Offer/>
    <About/>
    <Opportunities/>
    <Price/>
  </Layout>
)

export default IndexPage
