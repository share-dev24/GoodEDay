import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useUserStore, useLikeCardsListStore } from '../../stores/store';
import { getLikeCardsList } from '../../fetch/get';

const fetchLikeCardsList = async (uid: string) => {
    const data = await getLikeCardsList(uid);
    return data;
}

export default function LikeCardsSection() {
    const { uid } = useUserStore();
    const { cardsList, setCardsList } = useLikeCardsListStore();

    const { data: list, isSuccess } = useQuery({
        queryKey: ['fetchLikeCardsList'],
        queryFn: () => fetchLikeCardsList(uid || ''),
        enabled: !!uid
    });

    useEffect(() => {
        if (isSuccess && list) {
            setCardsList(list);
        }
    }, [isSuccess, list, setCardsList]);
    return (
        <div>
            내가 좋아요한 카드 리스트.
            {cardsList && cardsList.map((card, index) => (
                <div key={index}>{card}</div>
            ))}
        </div>
    );
}

// 아마도.........다시 짜야할 듯..? 하트....... 리스트 불러오는 컴포넌트를 app에다가 둘까..?ㅠㅜ 아니 그럼 계속 불러오는데?