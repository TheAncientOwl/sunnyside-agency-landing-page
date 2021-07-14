import { ImageGalleryCone, ImageGalleryMilkbottles, ImageGalleryOrange, ImageGallerySugarcubes } from '../Images';
import { Grid, ImageBox } from './LayoutElements';

export default function Gallery() {
  return (
    <Grid double>
      <ImageBox>
        <ImageGalleryMilkbottles />
      </ImageBox>
      <ImageBox>
        <ImageGalleryOrange />
      </ImageBox>
      <ImageBox>
        <ImageGalleryCone />
      </ImageBox>
      <ImageBox>
        <ImageGallerySugarcubes />
      </ImageBox>
    </Grid>
  );
}
