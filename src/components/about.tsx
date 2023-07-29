import { textStaggerChild, textStaggerParent } from "@/utils/animationVariants";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typescript from "@/assets/svg/typescript.svg";
import Javascript from "@/assets/svg/javascript.svg";
import React from "@/assets/svg/react.svg";
import Nextjs from "@/assets/svg/nextjs.svg";
import Nodejs from "@/assets/svg/nodejs.svg";
import Reactnative from "@/assets/svg/reactnative.svg";
import Html from "@/assets/svg/html.svg";
import Css from "@/assets/svg/css.svg";
import Sass from "@/assets/svg/sass.svg";
import Firebase from "@/assets/svg/firebase.svg";
import Postgresql from "@/assets/svg/postgresql.svg";
import Jest from "@/assets/svg/jest.svg";
import Github from "@/assets/svg/github.svg";
import Figma from "@/assets/svg/figma.svg";
import Styledcomponents from "@/assets/svg/styledcomponents.svg";
import Framermotion from "@/assets/svg/framermotion.svg";
import Storyblok from "@/assets/svg/storyblok.svg";
import Express from "@/assets/svg/express.svg";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { BREAKPOINT_SM } from "@/constants";
import mq from "@/utils/mq";

const skills = [
  { title: "JavaScript", logo: <Javascript /> },
  { title: "TypeScript", logo: <Typescript /> },
  { title: "React", logo: <React /> },
  { title: "NextJS", logo: <Nextjs /> },
  { title: "Node.JS", logo: <Nodejs /> },
  { title: "React Native", logo: <Reactnative /> },
  { title: "HTML5", logo: <Html /> },
  { title: "CSS3", logo: <Css /> },
  { title: "Sass", logo: <Sass /> },
  { title: "CSS-in-JS", logo: <Styledcomponents /> },
  { title: "Firebase", logo: <Firebase /> },
  { title: "Framer Motion", logo: <Framermotion /> },
  { title: "Storyblok CMS", logo: <Storyblok /> },
  { title: "PostgreSQL", logo: <Postgresql /> },
  { title: "Express", logo: <Express /> },
  { title: "Jest", logo: <Jest /> },
  { title: "GitHub", logo: <Github /> },
  { title: "Figma", logo: <Figma /> },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Row = styled(motion.div)`
  width: 100%;
`;

const Title = styled(motion.h2)`
  ${({ theme }) => theme.typography.h2};
  ${mq.mobileXSmall(css`
    font-size: 1.8rem;
  `)}
`;

const Description = styled(motion.p)`
  ${({ theme }) => theme.typography.p.normal};
  margin-top: 20px;
  ${mq.mobileXSmall(css`
    font-size: 1rem;
  `)}
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: 100px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 60px;
    max-width: 60px;
  }
  ${({ theme }) => theme.typography.p.small};
  div {
    text-align: center;
  }
`;

export default function About() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    width <= BREAKPOINT_SM ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 3 : 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <Container>
      <Row
        initial="hidden"
        whileInView="visible"
        variants={textStaggerParent}
        viewport={{ once: true, margin: "40px", amount: "some" }}
      >
        <Title variants={textStaggerChild}>About me</Title>
        <Description variants={textStaggerChild}>
          I came to software development with a background in product management and UX work, so I
          have a passionately user-centric mindset and love working within talented,
          cross-functional teams. Since transitioning into software I&apos;ve been working at a
          Leeds-based web development agency on a wide variety of client projects. I&apos;m looking
          for opportunties to work with the latest tech in a role where I can learn from the best,
          and create brilliant software solutions.
        </Description>
        <Description variants={textStaggerChild}>
          Here are some of the technologies I love working with:
        </Description>
      </Row>
      <Row
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        viewport={{ once: true, amount: "some" }}
      >
        <Slider {...settings}>
          {skills.map((skill) => (
            <LogoWrapper
              key={skill.title}
              style={{ height: "100px", width: "100px", border: "1px solid green" }}
            >
              {skill.logo}
              <div>{skill.title}</div>
            </LogoWrapper>
          ))}
        </Slider>
      </Row>
    </Container>
  );
}
