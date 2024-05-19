import { firebaseDb } from '../../firebase';
import { collection, getDocs, limit, query, orderBy } from 'firebase/firestore';
import type { IPostCards } from '../types/postCardsType';
import type { IRandomCardType } from '../types/randomCardType';

// 작성된 PostCards를 최신 writeTime을 기준으로 (4 * itemRows)개의 문서 가져오기
export const getPostCardsData = async (itemRows: number) => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(firebaseDb, 'postCards'),
        orderBy('writeDate', 'desc'),
        limit(4 * itemRows)
      )
    );
    const postCardsData = [] as Array<IPostCards>;
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      postCardsData.push({ postId: doc.id, ...item } as IPostCards);
    });

    return postCardsData;
  } catch (error) {
    console.error('Error getting documents: ', error);
    throw new Error('Error fetching postCards data: ' + error);
  }
};

// 생성된 특정 유저의 random card를 user page에 불러오기
export const getRandomCardsData = async () => {
  try {
    const uid = sessionStorage.getItem('uid');
    if (uid) {
      const listRef = collection(firebaseDb, 'randomCards', uid, 'cardsList');
      const querySnapshot = await getDocs(
        query(listRef, orderBy('createdTime', 'desc'))
      );

      const randomCardsData = [] as Array<IRandomCardType>;
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        randomCardsData.push({ cardId: doc.id, ...item } as IRandomCardType);
      });
      return randomCardsData;
    }
  } catch (error) {
    console.error('Error getting documents: ', error);
    throw new Error('Error fetching postCards data: ' + error);
  }
};
