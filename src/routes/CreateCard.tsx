import CreateForm from '../components/createCard/CreateForm';
import CreateFormTitle from '../components/createCard/CreateFormTitle';

export default function CreateCard() {
  return (
    <main className='w-[400px] mx-auto pt-[100px] flex flex-col justify-center items-center gap-[50px]'>
      <CreateFormTitle page='create' />
      <CreateForm />
    </main>
  );
}
