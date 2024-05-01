interface IBasicButton {
  text: string;
  onClick: () => void;
}

export default function BasicButton({ text, onClick }: IBasicButton) {
  return (
    <button
      onClick={onClick}
      className='w-full p-[2px] flex justify-center items-center text-lg font-extrabold bg-gradient-to-r from-secondary to-primary rounded-full'
    >
      <div className='w-full py-md bg-white rounded-full hover:bg-transparent'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary'>
          {text}
        </span>
      </div>
    </button>
  );
}
