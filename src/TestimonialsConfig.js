import EmilyImgSrc from './images/image-emily.jpg';
import ThomasImgSrc from './images/image-thomas.jpg';
import JennieImgSrc from './images/image-jennie.jpg';

const TestimonialsConfig = [
  {
    image: EmilyImgSrc,
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    title: 'Marketing Director',
  },
  {
    image: ThomasImgSrc,
    text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    title: 'Chief Operating Officer',
  },
  {
    image: JennieImgSrc,
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    title: 'Business Owner',
  },
];

Object.freeze(TestimonialsConfig);
export default TestimonialsConfig;
