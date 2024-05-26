import { firebaseDb, firebaseStorage } from '../../firebase';
import {
  doc,
  updateDoc,
  runTransaction,
  arrayUnion,
  arrayRemove
  // increment
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { IHandleUpdateFile, IHandleUpdateName } from '../types/staticType';
import type { IUpdateHeartProps } from '../types/postCardsType';

// 사용자 이름 업데이트 함수
export const handleUpdateName = async ({ uid, newName }: IHandleUpdateName) => {
  try {
    const userRef = doc(firebaseDb, 'userData', uid);

    await updateDoc(userRef, {
      name: newName
    });

    console.log('이름이 성공적으로 업데이트되었습니다.');
  } catch (error) {
    console.error('이름 업데이트 중 오류 발생:', error);
  }
};

export const handleFileChange = async ({ file, uid }: IHandleUpdateFile) => {
  if (file) {
    const blob = new Blob([file], { type: 'image/png,jpg,jpeg' });

    try {
      if (uid) {
        const uploadedFile = await uploadBytes(
          ref(firebaseStorage, `userProfiles/${uid}`),
          blob
        );

        const fileURL = await getDownloadURL(uploadedFile.ref);
        console.log('파일 업로드 성공:', fileURL);

        const userRef = doc(firebaseDb, 'userData', uid);

        await updateDoc(userRef, {
          photo: fileURL
        });

        sessionStorage.setItem('photo', fileURL);
        return fileURL;
      }
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
  }
};

// 서버에 하트 누른 결과를 추가하는 함수
export const updateLikeState = async ({
  uid,
  postId,
  isLike
}: IUpdateHeartProps) => {
  try {
    await runTransaction(firebaseDb, async (transaction) => {
      const userDocRef = doc(firebaseDb, 'userData', uid);
      const postDocRef = doc(firebaseDb, 'postCards', postId);

      const [userDoc, postDoc] = await Promise.all([
        transaction.get(userDocRef),
        transaction.get(postDocRef)
      ]);

      if (!userDoc.exists()) {
        throw new Error('존재하지 않는 유저입니다.');
      }

      if (!postDoc.exists()) {
        throw new Error('존재하지 않는 카드입니다.');
      }

      if (isLike) {
        transaction.update(userDocRef, {
          likeCards: arrayUnion(postId)
        });
        transaction.update(postDocRef, {
          likeUserList: arrayUnion(uid)
          // likeCount: increment(1)
        });
      } else {
        transaction.update(userDocRef, {
          likeCards: arrayRemove(postId)
        });
        transaction.update(postDocRef, {
          // likeCount: increment(-1),
          likeUserList: arrayRemove(uid)
        });
      }
    });
  } catch (error) {
    console.error('좋아요 처리에 실패했습니다: ', error);
  }
};
