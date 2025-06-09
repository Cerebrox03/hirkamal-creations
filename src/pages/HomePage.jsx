import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div></div>
      <Container className="mb-20">
        <div className="text-4xl font-bold flex justify-center mt-10 text-[#6B006A]">
          Welcome to Hirkamal Creations
        </div>
        <div className="text-md flex justify-center text-gray-500 mt-2">
          We convert your Ideas into Products
        </div>

        <div className="my-5 p-4 px-auto text-center">
          At Hirkamal Creations, our core expertise lies in creative graphic
          designing and professional website development. We bring brands to
          life through compelling visuals and pixel-perfect digital experiences.
          Alongside our core services, we also offer strategic digital
          marketing, YouTube channel management, and event-focused live graphics
          — making us your all-in-one creative partner.
        </div>

        <div className="flex justify-evenly">
          <div className="w-80 h-auto bg-[#6A0DAD] rounded-xl p-5">
            <div className="mb-4 text-3xl font-bold text-[#FACC15]">
              We Analyze
            </div>
            <div className="text-white font-bold">
              Because every great outcome starts with a deep understanding of
              your brand, audience, and goals.
            </div>
          </div>
          <div className="w-80 h-auto bg-[#6A0DAD] rounded-xl p-5">
            <div className="mb-4 text-3xl font-bold text-[#FACC15]">
              We Empathize
            </div>
            <div className="text-white font-bold">
              Because design that connects emotionally performs better — we
              think like your users before we create.
            </div>
          </div>
          <div className="w-80 h-auto bg-[#6A0DAD] rounded-xl p-5">
            <div className="mb-4 text-3xl font-bold text-[#FACC15]">
              We Design
            </div>
            <div className="text-white font-bold">
              Because visuals speak louder than words — we craft standout
              designs that leave lasting impressions.
            </div>
          </div>
        </div>

        <div className="text-xl font-bold flex m-10 text-gray-600">
          Solutions We Provide for Your Brand
        </div>

        <div className="services flex flex-col gap-10">
          <div className="service1 w-auto h-75 bg-[#6B006A] rounded-xl mx-10 flex">
            <div className="solution1 p-5 w-[50%]">
              <div className="heading text-3xl font-bold text-white mb-4">
                Custom Website Development
              </div>
              <div className="content text-white font-bold">
                We design and develop fully responsive, high-performance
                websites that are tailored to your brand's voice and business
                goals. Whether it's a sleek landing page, a robust business
                site, or an interactive portfolio — we focus on speed, SEO, and
                seamless user experience to keep visitors engaged and
                converting.
              </div>
            </div>
            <div className="image w-[50%] h-auto bg-gray-500 m-4 rounded-xl"></div>
          </div>

          <div className="service2 w-auto h-75 bg-[#6B006A] rounded-xl mx-10 flex">
            <div className="image w-[50%] h-auto bg-gray-500 m-4 rounded-xl"></div>
            <div className="solution1 p-5 w-[50%]">
              <div className="heading text-3xl font-bold text-white mb-4">
                Creative Graphic Designing
              </div>
              <div className="content text-white font-bold">
                Visual identity is the heart of your brand — and we bring it to
                life. From logos, business cards, and brochures to complete
                brand kits and social media creatives, we design every element
                with intention, consistency, and originality to make your brand
                unforgettable.
              </div>
            </div>
          </div>

          <div className="service3 w-auto h-75 bg-[#6B006A] rounded-xl mx-10 flex">
            <div className="solution1 p-5 w-[50%]">
              <div className="heading text-3xl font-bold text-white mb-4">
                Digital Marketing & SEO
              </div>
              <div className="content text-white font-bold">
                Your brand deserves visibility. We offer a full suite of digital
                marketing services — from keyword-rich SEO and Google Ads to
                content creation and conversion-focused social media campaigns.
                Our strategies are backed by data and tailored to deliver
                measurable growth and engagement.
              </div>
            </div>
            <div className="image w-[50%] h-auto bg-gray-500 m-4 rounded-xl"></div>
          </div>

          <div className="service4 w-auto h-75 bg-[#6B006A] rounded-xl mx-10 flex">
            <div className="image w-[50%] h-auto bg-gray-500 m-4 rounded-xl"></div>
            <div className="solution1 p-5 w-[50%]">
              <div className="heading text-3xl font-bold text-white mb-4">
                YouTube & Social Media Management
              </div>
              <div className="content text-white font-bold">
                Grow your digital presence with professional channel and content
                management. We handle content planning, thumbnails, posting
                schedules, video optimization, and analytics — making your brand
                more discoverable, shareable, and relatable on every platform.
              </div>
            </div>
          </div>

          <div className="service5 w-auto h-75 bg-[#6B006A] rounded-xl mx-10 flex">
            <div className="solution1 p-5 w-[50%]">
              <div className="heading text-3xl font-bold text-white mb-4">
                Live Graphics & Event Visuals
              </div>
              <div className="content text-white font-bold">
                Make every live event or stream look stunning and on-brand. We
                create real-time visual overlays, dynamic event graphics, and
                animations that enhance virtual experiences and captivate live
                audiences — perfect for conferences, webinars, and broadcasts.
              </div>
            </div>
            <div className="image w-[50%] h-auto bg-gray-500 m-4 rounded-xl"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
