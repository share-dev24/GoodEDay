import { Link } from 'react-router-dom';

export default function Logo() {
    return (

        <h1

            className=' bg-gradient-to-r from-secondary to-primary rounded-2xl font-bold text-transparent'
        >
            <div className='p-6px bg-white'>
                <Link to='/' className='bg-clip-text bg-gradient-to-r from-secondary to-primary text-xl font-black'>
                    굳이데이
                </Link>
            </div>
        </h1>
    )
}