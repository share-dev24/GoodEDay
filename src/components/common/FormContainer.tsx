import { IContainerProps } from '../../types/createCardType';

export default function FormContainer({ children }: IContainerProps) {
  return (
    <div className='w-full h-full p-sm flex justify-center items-center bg-gradient-to-r from-secondary to-primary rounded-lg'>
      <div className='w-full h-full px-3xl py-4xl flex flex-col justify-center items-center gap-4xl bg-white rounded-md'>
        {children}
      </div>
    </div>
  );
}
