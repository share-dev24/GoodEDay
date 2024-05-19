import { ReactNode } from 'react';


interface PostCardsGridProps {
    children: ReactNode;
}


export default function PostCardsGrid({ children }: PostCardsGridProps) {



    return (
        <div className='grid grid-cols-4 justify-start gap-[16px] px-[20px] py-lg'>
            {children}
        </div>
    )
}
