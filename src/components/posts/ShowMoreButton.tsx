interface IShowMoreButton {
    onClick: () => void;
}

export default function ShowMoreButton({ onClick }: IShowMoreButton) {
    return (
        <button
            onClick={onClick}
            className="group w-[40px] h-[40px] p-md bg-white border-2 border-primary rounded-full absolute bottom-sm left-[50%] transition-all duration-200 hover:bg-primary"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                className="w-6 h-6 stroke-primary transition-all duration-200 group-hover:stroke-white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </button>
    );
}
