import styled from 'styled-components';

import Header from './components/header';
import { FlexBox, TextBox, ImageBox } from './components/LayoutElements';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Header />

      <FlexBox>
        <TextBox></TextBox>
        <ImageBox></ImageBox>
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
