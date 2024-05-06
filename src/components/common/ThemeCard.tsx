import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeBadge from './ThemeBadge';
import getThemeKR from '../../modules/ThemeNameCompiling';

interface ThemeCardProps {
  theme: string;
  imageUrl: string;
  content: string;
}

const CardContainer = styled.div<{ imageUrl: string }>`
  width: 167px;
  height: 270px;
  border-radius: 8px;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
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
`;

export default function ThemeCard({ imageUrl = '/src/assets/images/a.jpg', theme = '카페', content = '카페는 어때?' }: ThemeCardProps) {



  return (
    <Link to={`create-card/:${theme}`}>
      <CardContainer imageUrl={imageUrl}>
        <ThemeBadge text={getThemeKR(theme)} />
        <Content>{content}</Content>
      </CardContainer>
    </Link>
  );
}