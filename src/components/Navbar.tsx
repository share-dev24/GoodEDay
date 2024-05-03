import { Link } from 'react-router-dom';
import Logo from './common/Logo';

interface NavbarProps {
    url?: string;
}

export default function Navbar({ url }: NavbarProps) {

    const POST_SVG = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6  text-black'>
        <path fillRule='evenodd' d='M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z' clipRule='evenodd' />
    </svg>)
    const USER_SVG = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6  text-black'>
        <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z' clipRule='evenodd' />
    </svg>

    )
    return (
        <nav className='h-[60px] px-[27px] flex items-center justify-between border-b border-b-gray'>
            <Logo />
            <div className='flex gap-sm'>
                <Link to='posts' type='button' className='flex flex-col'>
                    {POST_SVG}
                    <span className='text-sm text-black'>post</span>
                </Link>
                <Link to='user-page' className='flex flex-col'>
                    {url ? <img className='rounded-full' src={url} alt='user profile' /> : <div>{USER_SVG}</div>}
                    <span className='text-sm  text-black'>user</span>
                </Link>
            </div>
        </nav>
    )
}
