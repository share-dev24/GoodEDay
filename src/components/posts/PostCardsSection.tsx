import { useState } from "react"
import PostCard from "./PostCard"
import PostCardsGrid from "./PostCardsGrid"
import { useQuery } from '@tanstack/react-query';
import { getPostCardsData } from '../../fetch/get'
import type { IPostCards } from '../../types/postCardsType';

interface IPostCardsSection {
    rowInit: number;
}

const fetchPostCardsData = async (itemRows: number): Promise<IPostCards[]> => {
    const data = await getPostCardsData(itemRows);
    return data || null;
};

export default function PostCardsSection({ rowInit }: IPostCardsSection) {
    const [itemRows, setItemRows] = useState<number>(rowInit)
    const { data: postCardsData } = useQuery({ queryKey: ['fetchPostCards', itemRows], queryFn: () => fetchPostCardsData(itemRows) });

    return (
        <>
            {postCardsData?.map((data: IPostCards) => (
                <PostCardsGrid key={`${data.writeDate}-${data.name}`}>
                    <PostCard
                        userId={data.name}
                        reviewDate={data.writeDate}
                        theme={data.theme}
                        content={data.content}
                        imageUrl={data.image}
                    />
                </PostCardsGrid>
            ))}

        </>
    )

}