import {
  IbannerData,
  IthemeCardData,
  IrandomTodoData
} from '../types/staticType';

// 1. main page banner static-data
export const bannerData: IbannerData = {
  title: '굳이? 굳이! 특별한 하루를 위한 굳이데이',
  text: '🎲 다양한 옵션 설정으로 나만의 굳이데이 카드를 만들어요 👫 내가 실천한 굳이데이를 자랑해봐요'
};

// 2. main page theme list card static-data
export const themeCardData: IthemeCardData[] = [
  {
    theme: 'cafe',
    title: '분위기 좋은 카페 어때?',
    imageURL: '',
    season: false
  },
  {
    theme: 'restaurant',
    title: '맛집 탐방은 어때?',
    imageURL: '',
    season: false
  },
  {
    theme: 'event',
    title: '오랜만에 문화생활?',
    imageURL: 'src/assets/images/event.jpeg',
    season: false
  }
];

// 3. complete card page random todo static-data
export const randomTodoData: IrandomTodoData = {
  cafe: [
    {
      todo: '카페에 가서 커피도 마시고 책도 읽으면서 힐링을 해볼까요?',
      desc: '커피 마시면서 책 읽기'
    },
    {
      todo: '여유롭게 커피 마시면서 밀린 드라마 몰아보기!',
      desc: '커피 마시면서 드라마 보기'
    },
    {
      todo: '맛있는 커피와 함께 카페 인증샷 찍어서 SNS에 자랑해보기!',
      desc: '카페 인증샷 찍어서 SNS에 공유하기'
    },
    {
      todo: '노트와 펜을 꺼내서 일기를 써보는 건 어떨까요?',
      desc: '커피 마시면서 여유럽게 일기 작성하기'
    },
    {
      todo: '야외 테라스에서 좋아하는 음악을 들으며 힐링을 해볼까요?',
      desc: '야외 테라스에서 커피 마시면서 음악 감상하기'
    }
  ],
  restaurant: [
    {
      todo: '맛있는 음식 먹고 인증샷 찍어서 SNS에 자랑해보기!',
      desc: '맛있는 음식과 함께 인증샥 찍어서 SNS에 공유하기'
    },
    { todo: '맛있게 음식 먹고 리뷰 올려보기!', desc: '식사 후 리뷰 올리기' },
    {
      todo: '식사하는 동안 핸드폰 보지 않고 책을 읽거나 대화를 해보는 건 어떨까요?',
      desc: '식사하는 동안 핸드폰 사용하지 않고 책 혹은 대화하기'
    },
    {
      todo: '맛있게 식사하고 사장님께 칭찬 포스트잇 남겨보기',
      desc: '식사 후 사장님께 칭찬 포스트잇 전달하기'
    },
    {
      todo: '라디오 들으면서 여유롭게 식사해보는 건 어떨까요?',
      desc: '라디오 들으면서 식사하기'
    }
  ],
  event: [
    {
      todo: '혼자서 오싹한 공포 영화 한편!',
      desc: '혼자 영화관에 가서 공포영화 보기'
    },
    {
      todo: '영화 감상 후 크레딧 끝까지 보고 나오기',
      desc: '영화 크레딧 끝까지 보고 오기'
    },
    {
      todo: '가까운 도서관에 가서 책 읽고 감상문 작성해보기',
      desc: '도서관 방문해서 책 읽고 감상문 작성하기'
    },
    {
      todo: '가까운 도서관에 가서 평소 읽지 않았던 장르의 책 1권 읽어보는 건 어떨까요?',
      desc: '도서관 방문해서 새로운 장르의 책 1권 읽기'
    },
    {
      todo: '가까운 체육시설 방문해서 최소 1시간 운동해보기',
      desc: '가까운 체육시설에 가서 최소 1시간 운동하기'
    }
  ]
};
