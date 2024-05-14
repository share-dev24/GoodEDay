import { firebaseDb } from '../../firebase'; // firebase 모듈에서 firestore를 가져와야 함
import { collection, getDocs, limit, query, orderBy } from 'firebase/firestore';
import type { IPostCards } from '../types/postCardsType';

// 최신 writeTime을 기준으로 4*3개의 문서 가져오기
export const getPostCardsData = async (itemRows: number) => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(firebaseDb, 'postCards'),
        orderBy('write-date', 'desc'),
        limit(4 * itemRows)
      )
    );

    const postCardsData = [] as Array<IPostCards>;
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      postCardsData.push(item as IPostCards);
    });

    return postCardsData;
  } catch (error) {
    console.error('Error getting documents: ', error);
    throw new Error('Error fetching postCards data: ' + error);
  }
};
