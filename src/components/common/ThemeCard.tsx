import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeBadge from './ThemeBadge';
import getThemeKR from '../../modules/ThemeNameCompiling';

interface ThemeCardProps {
  theme: string;
  imageUrl: string;
  content: string;
}

const CardContainer = styled.img`
  width: 167px;
  height: 270px;
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
  filter: brightness(70%);
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
      <div className='w-[167px] h-[270px] relative'>
        <CardContainer src={imageUrl} />
        <ThemeBadge text={getThemeKR(theme)} />
        <Content>{content}</Content>
      </div>
    </Link>
  );
}
