import { firebaseDb } from '../../firebase';
import {
  collection,
  getDocs,
  limit,
  query,
  orderBy,
  doc,
  getDoc
} from 'firebase/firestore';
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
    console.error(
      '사용자의 랜덤 카드 정보를 가져오는데 실패했습니다. : ',
      error
    );
    throw new Error('사용자의 랜덤 카드를 가져오는데 발생한 에러: ' + error);
  }
};

// postDetail page에서 특정 id의 포스트 가져오기
export const getPostCardById = async (
  postId: string
): Promise<IPostCards | null> => {
  try {
    const docRef = doc(firebaseDb, 'postCards', postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return { postId: docSnap.id, ...data } as IPostCards;
    } else {
      return null;
    }
  } catch (error) {
    console.error('이 post의 정보를 가져오는데 에러가 발생합니다.', error);
    throw new Error('post detail 정보를 가져오는데 발생한 에러: ' + error);
  }
};

// 유저가 좋아요한 카드의 list를 가져오기
export const getLikeCardsList = async (uid: string): Promise<string[]> => {
  try {
    const docRef = doc(firebaseDb, 'userData', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.likeCards as string[];
    } else {
      return [];
    }
  } catch (error) {
    console.error('유저가 좋아요한 카드 리스트를 가져올 수 없습니다.:', error);
    throw new Error(
      '유저가 좋아요한 카드 리스트를 가져올 때 오류가 발생합니다: ' + error
    );
  }
};
