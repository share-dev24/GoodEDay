import { Link } from "react-router-dom";

export default function Logo() {
    // 색상이 적용되지 않는 상태
    return (
        <h1 className="font-bold tracking-tighter 
        bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
            <Link to='/' >굳이데이</Link>
        </h1>
    )
}