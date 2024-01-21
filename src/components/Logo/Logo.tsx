import logoIcon from 'assets/logo.png';
import { StyledImg, Title, Wrapper } from 'components/Logo/styles';

const Logo = ({ size }: { size: 'small' | 'medium' }) => (
  <Wrapper size={size}>
    <StyledImg src={logoIcon} alt="Logo" size={size} />
    <Title>Dashboard Kit</Title>
  </Wrapper>
);

export default Logo;
