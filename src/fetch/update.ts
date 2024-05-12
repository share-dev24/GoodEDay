import { firebaseDb, firebaseStorage } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { IHandleUpdateFile, IHandleUpdateName } from '../types/staticType';

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
