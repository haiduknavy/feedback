import { SectionWrap, SectionTitle } from "./Section.styled";

export default function Section({ tile, children }) {
  return (
    <SectionWrap>
      <SectionTitle>{tile}</SectionTitle>
      {children}
    </SectionWrap>
  );
}
