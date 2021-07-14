import { Container, Link, Links, LogoContainer, Socials } from './FooterElements';
import LogoSrc from '../../images/logo.svg';
import IconFbSrc from '../../images/icon-facebook.svg';
import IconInstagramSrc from '../../images/icon-instagram.svg';
import IconTwitterSrc from '../../images/icon-twitter.svg';
import IconPinterestSrc from '../../images/icon-pinterest.svg';

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoSrc} alt='logo' />
      </LogoContainer>

      <Links>
        <Link>about</Link>
        <Link>services</Link>
        <Link>project</Link>
      </Links>

      <Socials>
        <Link>
          <img src={IconFbSrc} alt='facebook' />
        </Link>
        <Link>
          <img src={IconInstagramSrc} alt='instagram' />
        </Link>
        <Link>
          <img src={IconTwitterSrc} alt='twitter' />
        </Link>
        <Link>
          <img src={IconPinterestSrc} alt='pinterest' />
        </Link>
      </Socials>
    </Container>
  );
}
