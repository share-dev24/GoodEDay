interface ITitle {
  title: string;
}

export default function FormTitle({ title }: ITitle) {
  return (
    <p className='mb-sm text-lg font-semibold text-primary text-center'>
      {title}
    </p>
  );
}
