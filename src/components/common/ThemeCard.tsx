import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeBadge from './ThemeBadge';
import getThemeKR from '../../modules/ThemeNameCompiling';

interface ThemeCardProps {
  theme: string;
  imageUrl: string;
  content: string;
}

const CardContainer = styled.div<{ image: string }>`
  width: 167px;
  height: 270px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: white;
  font-size: 1.5rem; 
  font-weight: bold;
  line-height: 1.3;
`;

export default function ThemeCard({ imageUrl = '/src/assets/images/a.jpg', theme, content }: ThemeCardProps) {

  return (
    <Link to={`create-card/${theme}`}>
      <CardContainer image={imageUrl}>
        <ThemeBadge text={getThemeKR(theme)} />
        <Content>{content}</Content>
      </CardContainer>
    </Link>
  );
}
