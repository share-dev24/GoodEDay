interface MainTitleProps {
    text: string;
}

export default function MainTitle({ text }: MainTitleProps) {

    return (
        <div className='text-lg font-bold text-black p-sm'>
            {text}
        </div>
    )
}