import styled, { css } from 'styled-components';

const Image = styled.div(
  ({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  `
);

import ImgHeaderDesktopSrc from '../images/desktop/image-header.jpg';
import ImgHeaderMobileSrc from '../images/mobile/image-header.jpg';
export function ImageHeader() {
  return <Image src={ImgHeaderDesktopSrc} mobileSrc={ImgHeaderMobileSrc} alt='orange' />;
}

import ImgTransformDesktopSrc from '../images/desktop/image-transform.jpg';
import ImgTransformMobileSrc from '../images/mobile/image-transform.jpg';
export function ImageTransform() {
  return <Image src={ImgTransformDesktopSrc} mobileSrc={ImgTransformMobileSrc} alt='egg' />;
}

import ImgStandOutDesktopSrc from '../images/desktop/image-stand-out.jpg';
import ImgStandOutMobileSrc from '../images/mobile/image-stand-out.jpg';
export function ImageStandOut() {
  return <Image src={ImgStandOutDesktopSrc} mobileSrc={ImgStandOutMobileSrc} alt='glass' />;
}

import ImgGraphicDesignDesktopSrc from '../images/desktop/image-graphic-design.jpg';
import ImgGraphicDesignMobileSrc from '../images/mobile/image-graphic-design.jpg';
export function ImageGraphicDesign() {
  return <Image src={ImgGraphicDesignDesktopSrc} mobileSrc={ImgGraphicDesignMobileSrc} alt='cherries' />;
}

import ImgPhotographyDesktopSrc from '../images/desktop/image-photography.jpg';
import ImgPhotographyMobileSrc from '../images/mobile/image-photography.jpg';
export function ImagePhotography() {
  return <Image src={ImgPhotographyDesktopSrc} mobileSrc={ImgPhotographyMobileSrc} alt='orange' />;
}

import ImgGalleryConeDesktopSrc from '../images/desktop/image-gallery-cone.jpg';
import ImgGalleryConeMobileSrc from '../images/mobile/image-gallery-cone.jpg';
export function ImageGalleryCone() {
  return <Image src={ImgGalleryConeDesktopSrc} mobileSrc={ImgGalleryConeMobileSrc} alt='cone' />;
}

import ImgGalleryMilkbottlesDesktopSrc from '../images/desktop/image-gallery-milkbottles.jpg';
import ImgGalleryMilkbottlesMobileSrc from '../images/mobile/image-gallery-milkbottles.jpg';
export function ImageGalleryMilkbottles() {
  return <Image src={ImgGalleryMilkbottlesDesktopSrc} mobileSrc={ImgGalleryMilkbottlesMobileSrc} alt='milkbottle' />;
}

import ImgGalleryOrangeDesktopSrc from '../images/desktop/image-gallery-orange.jpg';
import ImgGalleryOrangeMobileSrc from '../images/mobile/image-gallery-orange.jpg';
export function ImageGalleryOrange() {
  return <Image src={ImgGalleryOrangeDesktopSrc} mobileSrc={ImgGalleryOrangeMobileSrc} alt='orange' />;
}

import ImgGallerySugarcubesDesktopSrc from '../images/desktop/image-gallery-sugarcubes.jpg';
import ImgGallerySugarcubesMobileSrc from '../images/mobile/image-gallery-sugarcubes.jpg';
export function ImageGallerySugarcubes() {
  return <Image src={ImgGallerySugarcubesDesktopSrc} mobileSrc={ImgGallerySugarcubesMobileSrc} alt='orange' />;
}
