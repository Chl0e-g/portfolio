import About from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Project from "@/components/project";
import Section from "@/components/section";
import { leeds, luckyduck, portfolio } from "@/utils/content";

export default function Home() {
  return (
    <Layout>
      <>
        <Section accentBackground>
          <Hero />
        </Section>
        <Section>
          <About />
        </Section>
        <Section accentBackground>
          <Project {...leeds} imageSide="right" />
        </Section>
        <Section>
          <Project {...luckyduck} imageSide="left" />
        </Section>
        <Section accentBackground>
          <Project {...portfolio} imageSide="right" />
        </Section>
      </>
    </Layout>
  );
}
