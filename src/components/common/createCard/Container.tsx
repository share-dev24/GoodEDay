interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer) {
  return (
    <div className='w-[400px] p-sm flex justify-center items-center bg-gradient-to-r from-secondary to-primary rounded-lg'>
      <div className='w-full p-sm flex flex-col justify-center items-center gap-[30px] bg-white rounded-md'>
        {children}
      </div>
    </div>
  );
}
