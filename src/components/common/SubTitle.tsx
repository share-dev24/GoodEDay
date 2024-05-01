interface SubTitleProps {
    text: string;
}

export default function SubTitle({ text }: SubTitleProps) {

    return (
        <h3 className='text-md font-semibold text-black p-sm'>
            {text}
        </h3>
    )
}