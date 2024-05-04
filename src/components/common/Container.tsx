import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <main>
            <div className='w-[768px] bg-white h-full'>{children}</div>
        </main>
    )
}
