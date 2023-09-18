import { GithubLogo, LinkedinLogo, CaretDoubleDown } from 'phosphor-react';
import OutlineButton from './components/OutlineButton';
import { Button } from './components/ui/button';
import ilustra from '/Ilustra.svg'
import Title from '/Title.svg'
import { ProjectItem } from './components/ProjectItem';


function App() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-3xl">Home</h1>

        <div className=" flex gap-5 ">
          <a className="text-2xl hover:cursor-pointer hover:text-textColor/50">Projetos</a>
          <a className="text-2xl hover:cursor-pointer hover:text-textColor/50">Contato</a>
          <a className="text-2xl hover:cursor-pointer hover:text-textColor/50">Sobre mim</a>
        </div>
      </header>

      <article className='flex flex-col items-center' >
          <div className='flex justify-center items-center'>
            <img src={ilustra} alt="Ilustração de um dev em reunião" />
            <div className='flex flex-col'>
              <p className='text-4xl'>
                Oi, meu nome é <span className='text-brandBlue '>Vinicius Soares </span>e eu sou um desenvolvedor fullstack,
                aficionado por programação e tecnologia
              </p>
              <div className='flex flex-row gap-5 ml-10 mt-10'>
                <OutlineButton > Ver curriculo</OutlineButton>
                <OutlineButton> <GithubLogo size={32} /></OutlineButton>
                <OutlineButton> <LinkedinLogo size={32}/></OutlineButton>
              </div>
            </div>
          </div>

          <CaretDoubleDown className='animate-bounce' size={30}/>
          <div className='w-screen bg-gradient-to-br from-white via-white to-blueBrand'></div>
      </article>

      <main >
          <img src={Title} className='mt-20 ' />
          <div>
            <ProjectItem 
            src='@/src/assets/RocketTodo.png' 
            alt='Imagem do projeto' 
            title='Todo list React'
            description='O TodoList React é um projeto que visa simplificar e aprimorar a forma como as pessoas gerenciam suas tarefas diárias. Em um mundo cada vez mais agitado, manter-se organizado é essencial para o sucesso pessoal e profissional. Este projeto tem como objetivo criar uma aplicação web moderna e intuitiva que ajude os usuários a manterem o controle de suas tarefas de maneira eficiente e eficaz.'
            />
          </div>
      </main>
    </>
  );
}

export default App;
