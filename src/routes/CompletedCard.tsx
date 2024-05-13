import { useLocation } from 'react-router-dom';

export default function CompletedCard() {
  const location = useLocation();

  // 테스트 코드
  console.log(location.state);

  return <div>completed card page</div>;
}
