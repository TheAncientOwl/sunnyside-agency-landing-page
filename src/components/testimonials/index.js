import TestimonialsConfig from '../../TestimonialsConfig';
import { Container, Title, List } from './TestimonialsElements';

import Testimonial from './testimonial';

export default function Testimonials() {
  return (
    <Container>
      <Title>client testimonials</Title>
      <List>
        {TestimonialsConfig.map((item, index) => (
          <Testimonial key={index} image={item.image} text={item.text} name={item.name} title={item.title} />
        ))}
      </List>
    </Container>
  );
}
