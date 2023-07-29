import { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./footer";

const OuterContainer = styled.div`
  width: 100%;
`;

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <OuterContainer>
      <main>{children}</main>
      <Footer />
    </OuterContainer>
  );
}
