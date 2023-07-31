import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import mq from "@/utils/mq";
import useWindowSize from "@/hooks/useWindowSize";
import { BREAKPOINT_SM } from "@/constants";

const H1 = styled.h1`
  ${({ theme }) => theme.typography.h1};
  ${mq.desktopSmall(css`
    font-size: 4rem;
  `)}
  ${mq.tablet(css`
    font-size: 3rem;
  `)}
  ${mq.mobile(css`
    font-size: 2.5rem;
    text-align: center;
  `)}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 28px;
`;

const Letter = styled(motion.span)`
  display: inline-block;
`;

const Intro = styled(motion.p)`
  ${({ theme }) => theme.typography.p.large};
  ${mq.mobile(css`
    font-size: 1.3rem;
  `)}
`;

const GradientText = styled.span`
  background: ${({ theme }) =>
    `-webkit-linear-gradient(45deg, ${theme.colors.gradientLeft}, ${theme.colors.gradientRight})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

export default function Hero() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    width <= BREAKPOINT_SM ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  const titleLetters = Array.from("Hi, I'm Chloe Glassonbury");

  return (
    <Wrapper>
      <H1>
        {titleLetters.map((letter, index) => {
          const maxOffset = 200;
          const minOffset = 50;
          const randomOffset = -Math.floor(Math.random() * (maxOffset - minOffset + 1) + minOffset);
          const duration = (randomOffset / 150) * -1;
          return (
            <>
              {letter === "G" && isMobile && <br></br>}
              <Letter
                key={index}
                initial={{ y: randomOffset, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration, delay: 0.5 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </Letter>
            </>
          );
        })}
      </H1>
      <Intro
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 1.5 }}
      >
        I&apos;m a <GradientText>React developer</GradientText> who&apos;s passionate about building
        beautiful, user-centred software
      </Intro>
    </Wrapper>
  );
}
