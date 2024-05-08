interface SubTitleProps {
    text: string;
}

export default function SubTitle({ text }: SubTitleProps) {

    return (
        <h3 className='text-md font-semibold text-black px-sm pl-[20px]'>
            {text}
        </h3>
    )
}