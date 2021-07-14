import styled from 'styled-components';

import Header from './components/header';
import {
  FlexBox,
  TextBox,
  ImageBox,
  TextBoxTitle,
  TextBoxParagraph,
  TextBoxLink,
  TextBoxContent,
} from './components/LayoutElements';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import { ImageTransform } from './components/Images';

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Header />

      <FlexBox>
        <TextBox>
          <TextBoxContent>
            <TextBoxTitle>Transform your brand</TextBoxTitle>
            <TextBoxParagraph>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
            </TextBoxParagraph>
            <TextBoxLink>learn more</TextBoxLink>
          </TextBoxContent>
        </TextBox>

        <ImageBox>
          <ImageTransform />
        </ImageBox>
      </FlexBox>

      <FlexBox>
        <TextBox></TextBox>
        <ImageBox></ImageBox>
      </FlexBox>

      <FlexBox>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
      </FlexBox>

      <Testimonials />

      <FlexBox>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
      </FlexBox>

      <Footer />
    </Container>
  );
}
