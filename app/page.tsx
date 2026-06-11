// app/page.tsx

import type { JSX } from "react";
import Header from './components/Header'
import Banner from './components/home/Banner'
import SectionFeatures from './components/home/SectionFeatures'
import SectionPosts from './components/home/SectionPosts'

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <SectionFeatures />
      <SectionPosts />
    </>
  );
}

export default Home;