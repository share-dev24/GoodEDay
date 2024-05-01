interface ITitle {
  title: string;
}

export default function Title({ title }: ITitle) {
  return (
    <p className='text-lg font-semibold text-primary text-center'>{title}</p>
  );
}
