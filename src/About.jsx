import React from "react";
import "./about.css";

export default function About() {
  return (
    <div  className="my-about container-fluid">
      <div className="int-about mt-3">
        <div>
          <img
            src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
          />
        </div>
        <div className="about-txt">
          <h2>About </h2>
          <p>
            Welcome to Seat Adda, your go-to platform for hassle-free bus
            bookings. We strive to provide a seamless and comfortable experience
            for travelers, ensuring they reach their destinations with ease.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            commodi aut repellendus, vero maxime quia explicabo! Vel alias ipsam
            eveniet.
          </p>

          <p>
            Experience the joy of hassle-free travel with Seat Adda. Book your
            bus tickets today!
          </p>
        </div>
      </div>
    </div>
  );
}
