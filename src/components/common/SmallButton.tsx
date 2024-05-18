interface IBasicButton {
  text: string;
  disabled: boolean
  onClick: () => void;
}

export default function SmallButton({ text, disabled, onClick }: IBasicButton) {
  return (
    <button
      onClick={onClick}
      {...(disabled ? { disabled: true } : {})}
      className='w-full p-2px flex justify-center items-center text-sm text-transparent font-semibold bg-gradient-to-r from-secondary to-primary rounded-full transition duration-150 ease-in-out hover:text-white
       disabled disabled:bg-gray disabled:text-black disabled:bg-gradient-to-r disabled:from-gray-200 disabled:to-black disabled:hover:text-white'
    >
      <div className='w-full py-sm bg-white rounded-full transition duration-250 ease-in-out hover:bg-transparent'>
        <span className='bg-clip-text bg-gradient-to-r from-secondary to-primary'>
          {text}
        </span>
      </div>
    </button>
  );
}
