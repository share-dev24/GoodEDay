interface ISpanText {
  text: string;
}

export default function FormSpanText({ text }: ISpanText) {
  return <span className='text-base font-normal text-black'>{text}</span>;
}
