import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <main className='min-h-screen flex justify-center bg-gray'>
            <div className='w-[768px] bg-white'>{children}</div>
        </main>
    )
}
