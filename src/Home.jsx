import React from "react";

import Form from "./Form";

import Services from "./Services";
import TextDetail from "./TextDetail";
import Faqs from "./Faqs";
import BusStop from "./BusStop";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterMobile from "./FooterMobile";
import Chat from "./Chat.jsx";
import FormMob from "./FormMob";

export default function Home() {
  return (
    <div className="home">
      <Form />
      <FormMob />

      <Services />
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
