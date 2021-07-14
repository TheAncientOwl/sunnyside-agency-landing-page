import styled from 'styled-components';

import Header from './components/header';
import { Grid, TextBox, ImageBox, TextBoxTitle, TextBoxParagraph, TextBoxLink } from './components/LayoutElements';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import { ImageTransform, ImageStandOut } from './components/Images';

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Header />

      <Grid>
        <TextBox>
          <TextBoxTitle>Transform your brand</TextBoxTitle>
          <TextBoxParagraph>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </TextBoxParagraph>
          <TextBoxLink>learn more</TextBoxLink>
        </TextBox>

        <ImageBox>
          <ImageTransform />
        </ImageBox>
      </Grid>

      <Grid>
        <ImageBox>
          <ImageStandOut />
        </ImageBox>

        <TextBox>
          <TextBoxTitle>Stand out to the right audience</TextBoxTitle>
          <TextBoxParagraph>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we’ll build and extend your brand in digital places.
          </TextBoxParagraph>
          <TextBoxLink>learn more</TextBoxLink>
        </TextBox>
      </Grid>

      <Grid>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
      </Grid>

      <Testimonials />

      <Grid double>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
        <ImageBox></ImageBox>
      </Grid>

      <Footer />
    </Container>
  );
}
