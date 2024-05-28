export function getThemeKR(theme: string) {
  let themeKR = '';

  switch (theme) {
    case 'cafe':
      themeKR = '카페';
      break;
    case 'restaurant':
      themeKR = '맛집';
      break;
    case 'event':
      themeKR = '문화생활';
      break;
    case 'spot':
      themeKR = '관광명소';
      break;
    default:
      themeKR = '알 수 없는 테마';
  }

  return themeKR;
}

export function getThemeEN(theme: string) {
  let themeEN = '';

  switch (theme) {
    case '카페':
      themeEN = 'cafe';
      break;
    case '맛집':
      themeEN = 'restaurant';
      break;
    case '문화시설':
      themeEN = 'event';
      break;
    case '관광명소':
      themeEN = 'spot';
      break;
    default:
      themeEN = '알 수 없는 테마';
  }

  return themeEN;
}
