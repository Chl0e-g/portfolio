import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styled, { css } from "styled-components";
import ArrowRight from "@/assets/svg/arrowRight.svg";
import { textStaggerChild, textStaggerParent } from "@/utils/animationVariants";
import { useEffect, useRef, useState } from "react";
import mq from "@/utils/mq";
import useWindowSize from "@/hooks/useWindowSize";
import { BREAKPOINT_SM } from "@/constants";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

const Column = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  ${mq.mobile(css`
    width: 100%;
  `)}
`;

const ImageWrapper = styled(motion.div)`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: auto;
  }
  ${mq.mobile(css`
    width: 100%;
    margin-bottom: 14px;
  `)}
  ${mq.mobileXSmall(css`
    margin-bottom: 0;
  `)}
`;

const Title = styled(motion.h2)`
  ${({ theme }) => theme.typography.h2};
  ${mq.mobile(css`
    margin-bottom: 34px;
  `)}
  ${mq.mobileXSmall(css`
    font-size: 1.8rem;
    margin-bottom: 20px;
  `)}
`;

const Description = styled(motion.p)`
  ${({ theme }) => theme.typography.p.normal};
  margin-top: 20px;
  ${mq.mobileXSmall(css`
    font-size: 1rem;
    line-height: 1.8rem;
  `)}
`;

const TechList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 24px;
  align-items: center;
  ${({ theme }) => theme.typography.label.normal};
  li {
    margin: 0;
    padding: 0;
  }
  ${mq.mobileXSmall(css`
    ${({ theme }) => theme.typography.label.small};
    margin-top: 16px;
  `)}
`;

const Separator = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const TextLink = styled(motion.a)`
  ${({ theme }) => theme.typography.p.large};
  text-align: left;
  margin-top: 40px;
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 2px;
  cursor: pointer;
  &:hover {
    gap: 12px;
  }
  transition: gap 0.2s;
  svg {
    height: 1.5rem;
  }
  ${mq.mobileXSmall(css`
    margin-top: 20px;
    font-size: 1.2rem;
  `)}
`;

const Label = styled(motion.div)`
  ${({ theme }) => theme.typography.label.large};
  background: ${({ theme }) =>
    `-webkit-linear-gradient(45deg, ${theme.colors.gradientLeft}, ${theme.colors.gradientRight})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  ${mq.mobile(css`
    ${({ theme }) => theme.typography.label.small};
    margin-bottom: 4px;
  `)}
`;

export default function Project({
  imageSide,
  image,
  title,
  websiteLink,
  gitHubLink,
  description,
  tech,
}: {
  imageSide: "left" | "right";
  image: { url: string; alt: string };
  title: string;
  websiteLink?: string;
  gitHubLink?: string;
  description: string;
  tech: string[];
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    width <= BREAKPOINT_SM ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  return (
    <Container>
      <Column
        initial="hidden"
        whileInView="visible"
        variants={textStaggerParent}
        viewport={{ once: true, margin: "200px", amount: "all" }}
        style={{ order: imageSide === "left" ? 2 : 0 }}
      >
        <Label variants={textStaggerChild}>Project</Label>
        <Title variants={textStaggerChild}>{title}</Title>
        {isMobile && (
          <ImageWrapper variants={textStaggerChild}>
            <Image src={image.url} alt={image.alt} width={800} height={500} />
          </ImageWrapper>
        )}
        <Description ref={ref} variants={textStaggerChild}>
          {description}
        </Description>
        <TechList variants={textStaggerChild}>
          {tech.map((item, i) => (
            <>
              <li key={item}>{item}</li>
              {i < tech.length - 1 && <Separator />}
            </>
          ))}
        </TechList>
        {websiteLink && (
          <TextLink
            variants={textStaggerChild}
            href={websiteLink}
            target="_blank"
            rel="noopener noreferer"
          >
            Take a look
            <ArrowRight />
          </TextLink>
        )}
        {gitHubLink && (
          <TextLink
            variants={textStaggerChild}
            href={websiteLink}
            target="_blank"
            rel="noopener noreferer"
          >
            Peek at my code
            <ArrowRight />
          </TextLink>
        )}
      </Column>
      {!isMobile && (
        <ImageWrapper style={{ y }}>
          <Image src={image.url} alt={image.alt} width={800} height={500} />
        </ImageWrapper>
      )}
    </Container>
  );
}
