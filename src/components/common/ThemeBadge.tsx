interface IThemeBadge {
    text: string;
}

export default function ({ text }: IThemeBadge) {

    return (
        <span className="inline-flex items-center gap-x-sm py-[3px] px-[6px] rounded-full text-xs font-medium bg-primary text-white dark:bg-white dark:text-neutral-800">{text}</span>
    )
}