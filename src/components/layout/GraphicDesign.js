import { ImageBox, ImageText, ImageTitle, ImageParagraph } from './LayoutElements';
import { ImageGraphicDesign } from '../Images';
import Colors from '../../Colors';

export default function GraphicDesign() {
  return (
    <ImageBox>
      <ImageGraphicDesign />
      <ImageText color={Colors.darkDesaturatedCyan}>
        <ImageTitle>Graphic Design</ImageTitle>
        <ImageParagraph>
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures
          potential clients’ attention.
        </ImageParagraph>
      </ImageText>
    </ImageBox>
  );
}
