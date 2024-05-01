interface IBasicButton {
    text: string;
}

//p-3 inline-flex items-center text - sm font - semibold rounded - lg bg - gradient - to - r from - secondary to - primary disabled: opacity - 50


export default function BasicButton({ text }: IBasicButton) {
    return (
        <button type='button' className='p-3 border-2 border-gradient-to-r'>
            <span className='text-white'>
                {text}
            </span>
        </button>
    )
}