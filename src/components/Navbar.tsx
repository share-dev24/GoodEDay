import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import { useUserStore } from '../stores/store';



export default function Navbar() {
    const { displayName, uid, photo } = useUserStore((state) => ({
        displayName: state.displayName,
        uid: state.uid,
        photo: state.photo,
    }));
    console.log(displayName, photo, uid)

    const POST_SVG = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-[36px] text-black'>
            <path
                fillRule='evenodd'
                d='M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a 3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z'
                clipRule='evenodd'
            />
        </svg>
    );



    return (
        <nav className='h-[60px] px-[27px] flex items-center justify-between border-b border-solid border-b-gray'>
            <Logo />
            <div className='flex gap-sm'>
                <Link to='posts' className='flex flex-col '>
                    {POST_SVG}
                </Link>

                {uid ? (<Link to='user-page' className='flex flex-col '>

                    <img className='rounded-full w-[40px] ' src={photo ? photo : 'src/assets/images/user.svg'} alt='user profile' />

                </Link>) :
                    (<Link to='login' className='flex flex-col'>

                        <img className="flex justify-center" src='src/assets/images/user.svg' />

                    </Link>)
                }
            </div>
        </nav>
    );
}
