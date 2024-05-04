interface IThemeBadge {
    text: string;
}

export default function ({ text }: IThemeBadge) {

    return (
        <div className='flex p-[8px] relative'>
            <span className='absolute right-[6px] inline-flex items-center gap-x-sm py-[3px] px-[6px] rounded-full text-xs font-medium bg-gradient-to-r from-secondary to-primary text-white dark:bg-white dark:text-neutral-800'>{text}</span>
        </div>
    )
}