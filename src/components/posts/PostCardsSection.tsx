import { useState } from "react";
import PostCard from "./PostCard";
import PostCardsGrid from "./PostCardsGrid";
import { useQuery } from '@tanstack/react-query';
import { getPostCardsData } from '../../fetch/get';
import type { IPostCards } from '../../types/postCardsType';
import FilteringButton from "../common/FilteringButton";

interface IPostCardsSection {
    rowInit: number;
}

type FilteringType = 'writeDate' | 'likeCount'

const fetchPostCardsData = async (itemRows: number, orderType: FilteringType): Promise<IPostCards[]> => {
    const data = await getPostCardsData(itemRows, orderType);
    return data || [];
};

export default function PostCardsSection({ rowInit }: IPostCardsSection) {
    const [itemRows, setItemRows] = useState<number>(rowInit);
    const [orderType, setOrderType] = useState<FilteringType>('writeDate');

    const { data: postCardsData } = useQuery({
        queryKey: ['fetchPostCards', itemRows, orderType],
        queryFn: () => fetchPostCardsData(itemRows, orderType),
    });


    return (
        <>
            <FilteringButton
                onPopularClick={() => setOrderType('likeCount')}
                onRealtimeClick={() => setOrderType('writeDate')}
            />
            <PostCardsGrid >
                {postCardsData?.map((data: IPostCards) => (
                    <PostCard key={`${data.writeDate}-${data.name}`}
                        postId={data.postId}
                        uid={data.uid}
                        userName={data.name}
                        reviewDate={data.writeDate}
                        theme={data.theme}
                        content={data.content}
                        imageUrl={data.image}
                    />
                ))}
            </PostCardsGrid>

        </>
    )

}