"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import MyComponent  from "./sendMessageToMe";
import { Metadata } from "next";
// import React, { useEffect } from 'react';
// reference sendMessageToMe

// export const metadata: Metadata = {
//   title: "Racx Software Development LLC",
//   description: "This is Home for Racx",
//   // other metadata
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Pricing /> */}
      <MyComponent/>
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
