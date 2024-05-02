interface IBasicButton {
  text: string;
  onClick: () => void;
}

export default function BasicButton({ text, onClick }: IBasicButton) {
  return (
    <button
      onClick={onClick}
      className='w-full p-2px flex justify-center items-center text-lg text-transparent font-extrabold bg-gradient-to-r from-secondary to-primary rounded-full transition duration-150 ease-in-out hover:text-white'
    >
      <div className='w-full py-md bg-white rounded-full transition duration-250 ease-in-out hover:bg-transparent'>
        <span className='bg-clip-text bg-gradient-to-r from-secondary to-primary'>
          {text}
        </span>
      </div>
    </button>
  );
}
