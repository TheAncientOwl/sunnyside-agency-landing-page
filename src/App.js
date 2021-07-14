import styled from 'styled-components';

import Header from './components/header';
import { FlexBox, TextBox, ImageBox } from './components/LayoutElements';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

import BottomImagesConfig from './BottomImagesConfig';

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Header />

      <ImageBox />

      <FlexBox>
        <TextBox></TextBox>
        <ImageBox />
      </FlexBox>

      <FlexBox>
        <TextBox></TextBox>
        <ImageBox />
      </FlexBox>

      <FlexBox>
        <ImageBox></ImageBox>
        <ImageBox />
      </FlexBox>

      <Testimonials />

      <FlexBox>
        {[BottomImagesConfig.map((item, index) => <ImageBox key={index} src={item.src} alt={item.alt} />)]}
      </FlexBox>

      <Footer />
    </Container>
  );
}
