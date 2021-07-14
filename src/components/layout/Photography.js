import { ImageBox, ImageText, ImageTitle, ImageParagraph } from './LayoutElements';
import { ImagePhotography } from '../Images';
import Colors from '../../Colors';

export default function Photograpy() {
  return (
    <ImageBox>
      <ImagePhotography />
      <ImageText color={Colors.darkBlue}>
        <ImageTitle>Photography</ImageTitle>
        <ImageParagraph>
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </ImageParagraph>
      </ImageText>
    </ImageBox>
  );
}
