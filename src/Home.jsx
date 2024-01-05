import React from "react";

import Form from "./Form";

import TextDetail from "./TextDetail";
import Faqs from "./Faqs";
import BusStop from "./BusStop";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterMobile from "./FooterMobile";
import Chat from "./Chat.jsx";
import FormMob from "./FormMob";
import About from "./About";

export default function Home() {
  return (
    <div className="home">
      <Form />
      <FormMob />
      {/* <Services /> */}
      <About id="my-about" />
      <TextDetail />
      <Faqs />
      <BusStop />
      <FooterOne />
      <FooterTwo />
      <FooterMobile />
      <Chat />
    </div>
  );
}
