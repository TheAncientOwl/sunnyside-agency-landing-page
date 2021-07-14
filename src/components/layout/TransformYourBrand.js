import { Grid, TextBox, ImageBox, TextBoxTitle, TextBoxParagraph, TextBoxLink } from './LayoutElements';
import { ImageTransform } from '../Images';

export default function TransformYourBrand() {
  return (
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
  );
}
