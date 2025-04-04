import React from "react";
import Header from "@/components/others/Header";
import Aside from "@/components/others/Aside";
import HomeFeed from "@/components/home/HomeFeed";

const Home = () => {
  return (
    <main className="flex flex-row justify-center items-start w-full h-screen">
        <div className="flex flex-row justify-start items-start lg:container w-full h-full">
        <Header />
        <section className="flex-1 p-4 overflow-y-scroll">
            <HomeFeed />
        </section>
        <Aside />
        </div>
    </main>
  )
};

export default Home;
