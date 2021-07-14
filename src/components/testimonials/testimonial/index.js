import { Container, Image, Text, Name, Title } from './TestimonialElements';
import PropTypes from 'prop-types';

export default function Testimonial({ image, text, name, title }) {
  image, text, name, title;
  return (
    <Container>
      <Image src={image} alt={name} />
      <Text>{text}</Text>
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Container>
  );
}

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
