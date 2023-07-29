import mq from "@/utils/mq";
import { ReactElement } from "react";
import styled, { css } from "styled-components";

interface IProps {
  $accentBackground: boolean;
}

const OuterContainer = styled.div<IProps>`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ $accentBackground, theme }) =>
    $accentBackground ? theme.colors.accentLight : theme.colors.primaryLight};
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 42px;
  color: ${({ theme }) => theme.colors.primaryDark};
  ${mq.mobile(css`
    padding: 24px;
  `)}
`;

export default function Section({
  children,
  accentBackground,
}: {
  children: ReactElement;
  accentBackground?: boolean;
}) {
  return (
    <OuterContainer $accentBackground={accentBackground || false}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}
