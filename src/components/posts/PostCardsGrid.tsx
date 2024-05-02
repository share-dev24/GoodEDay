import { ReactNode } from 'react';

interface PostCardsGridProps {
    children: ReactNode;
}

export default function PostCardsGrid({ children }: PostCardsGridProps) {

    return (
        <div className='grid grid-cols grid-flow-col justify-start gap-[16px] px-[20px] py-lg'>
            {children}
        </div>
    )
}
