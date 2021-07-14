import { Grid, TextBox, ImageBox, TextBoxTitle, TextBoxParagraph, TextBoxLink } from './LayoutElements';
import { ImageStandOut } from '../Images';

export default function StandOutTheRightAudience() {
  return (
    <Grid>
      <ImageBox>
        <ImageStandOut />
      </ImageBox>

      <TextBox>
        <TextBoxTitle>Stand out to the right audience</TextBoxTitle>
        <TextBoxParagraph>
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll
          build and extend your brand in digital places.
        </TextBoxParagraph>
        <TextBoxLink>learn more</TextBoxLink>
      </TextBox>
    </Grid>
  );
}
