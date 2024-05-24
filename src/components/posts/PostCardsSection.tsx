import { useState } from "react"
import PostCard from "./PostCard"
import PostCardsGrid from "./PostCardsGrid"
import { useQuery } from '@tanstack/react-query';
import { getPostCardsData } from '../../fetch/get'
import type { IPostCards } from '../../types/postCardsType';
import { useLocation } from "react-router-dom";

interface IPostCardsSection {
    rowInit: number;
}

const fetchPostCardsData = async (itemRows: number): Promise<IPostCards[]> => {
    const data = await getPostCardsData(itemRows);
    return data || [];
};

export default function PostCardsSection({ rowInit }: IPostCardsSection) {
    const location = useLocation()
    const [itemRows, setItemRows] = useState<number>(rowInit)
    const { data: postCardsData } = useQuery({ queryKey: ['fetchPostCards', itemRows, location], queryFn: () => fetchPostCardsData(itemRows) });
    console.log(postCardsData)
    return (
        <>
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
                        likeUserList={data.likeUserList}
                    />
                ))}
            </PostCardsGrid>

        </>
    )

}