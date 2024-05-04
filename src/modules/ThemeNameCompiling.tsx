export default function getThemeKR(theme: string) {
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
        default:
            themeKR = '알 수 없는 테마';
    }

    return themeKR;
}
