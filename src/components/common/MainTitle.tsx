interface MainTitleProps {
    text: string;
}

export default function MainTitle({ text }: MainTitleProps) {

    return (
        <h2 className='text-lg font-bold text-black p-sm'>
            {text}
        </h2>
    )
}