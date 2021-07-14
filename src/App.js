import styled from 'styled-components';

import { Grid } from './components/layout/LayoutElements';

import Header from './components/header';
import TransformYourBrand from './components/layout/TransformYourBrand';
import StandOutTheRightAudience from './components/layout/StandOutTheRIghtAudience';
import GraphicDesign from './components/layout/GraphicDesign';
import Photograpy from './components/layout/Photography';
import Gallery from './components/layout/Gallery';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Header />

      <div id='content' />

      <TransformYourBrand />
      <StandOutTheRightAudience />

      <Grid>
        <GraphicDesign />
        <Photograpy />
      </Grid>

      <Testimonials />

      <Gallery />

      <Footer />
    </Container>
  );
}
