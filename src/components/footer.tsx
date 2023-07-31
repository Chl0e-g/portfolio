import mq from "@/utils/mq";
import styled, { css } from "styled-components";
import Github from "@/assets/svg/github.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import {
  textStaggerChild,
  textStaggerChildButton,
  textStaggerParent,
} from "@/utils/animationVariants";
import { motion } from "framer-motion";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accentLight};
  padding-top: 120px;
  z-index: -1;
  overflow: hidden;
  ${mq.ultraWide(css`
    padding-top: 220px;
  `)}
`;

const AngledBackground = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  position: relative;
  height: fit-content;
  z-index: 1;
  :after {
    content: "";
    position: absolute;
    top: -100px;
    left: 0;
    width: 150%;
    height: 200px;
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: rotate(-3deg);
    z-index: -1;
    outline: 1px solid transparent;
    ${mq.ultraWide(css`
      top: -160px;
      height: 300px;
    `)}
  }
`;

const TextWrapper = styled(motion.footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 42px 140px;
  max-width: 600px;
  margin: 0 auto;
  ${mq.mobile(css`
    padding: 24px;
  `)}
`;

const Text = styled(motion.p)`
  ${({ theme }) => theme.typography.p.large};
  color: ${({ theme }) => theme.colors.primaryLight};
  ${mq.mobile(css`
    font-size: 1.3rem;
  `)}
  z-index:5;
`;

const TextLink = styled(motion.a)`
  ${({ theme }) => theme.typography.p.large};
  margin: 0;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  margin-top: 60px;
  cursor: pointer;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({
    theme,
  }) => `linear-gradient(${theme.colors.primaryLight}, ${theme.colors.primaryLight}) padding-box,
              linear-gradient(to right, ${theme.colors.gradientLeft}, ${theme.colors.gradientRight}) border-box;`};
  border: 4px solid transparent;
  transition: All 0.2s linear;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    background: ${({ theme }) =>
      `linear-gradient(45deg, ${theme.colors.gradientLeft}, ${theme.colors.gradientRight}) border-box`};
  }
  ${mq.mobile(css`
    margin-top: 40px;
    margin-bottom: 40px;
  `)}
`;

const Links = styled.div`
  margin-top: auto;
  width: 100px;
  margin-left: 24px;
  display: flex;
  gap: 24px;
  a {
    height: 48px;
    width: 48px;
    cursor: pointer;
    overflow: hidden;
    svg {
      width: 36px;
      height: 36px;
      fill: ${({ theme }) => theme.colors.primaryLight};
    }
    &:hover {
      transform: translateY(-12px);
    }
    transition: transform 0.2s;
  }
`;

export default function Footer() {
  return (
    <Background>
      <AngledBackground>
        <TextWrapper
          initial="hidden"
          whileInView="visible"
          variants={textStaggerParent}
          viewport={{ once: true, margin: "200px", amount: "all" }}
        >
          <Text variants={textStaggerChild}>
            Please don&apos;t hesitate to get in touch, I&apos;d love to hear from you!
          </Text>
          <TextLink variants={textStaggerChildButton} href="mailto:caglassonbury@gmail.com">
            Send me an email
          </TextLink>
        </TextWrapper>
        <Links>
          <a href="https://www.linkedin.com/in/chloe-glassonbury-84390b231/">
            <Linkedin />
          </a>
          <a href="https://github.com/Chl0e-g">
            <Github />
          </a>
        </Links>
      </AngledBackground>
    </Background>
  );
}
