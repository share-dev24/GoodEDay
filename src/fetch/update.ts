import { firebaseDb } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

interface IHandleUpdateName {
  uid: string;
  newName: string;
}

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
