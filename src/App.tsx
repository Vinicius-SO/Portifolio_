import { GithubLogo, LinkedinLogo, CaretDoubleDown } from 'phosphor-react';
import OutlineButton from './components/OutlineButton';
import ilustra from '/Ilustra.svg'
import Title from '/Title.svg'
import { ProjectItem } from './components/ProjectItem';
import { Separator } from './components/ui/separator';


function App() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-3xl">Home</h1>

        <div className=" flex gap-5 ">
          <a className="text-2xl hover:cursor-not-allowed hover:text-textColor/50">Projetos</a>
          <a className="text-2xl hover:cursor-not-allowed hover:text-textColor/50">Contato</a>
          {/* <a className="text-2xl hover:cursor-pointer hover:text-textColor/50">Sobre mim</a> */}
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
                <a href="./Cv - Vinicius Oliveira.pdf">
                  <OutlineButton > Ver curriculo</OutlineButton>
                </a>
                <a href="https://github.com/Vinicius-SO">
                  <OutlineButton> <GithubLogo size={32} /></OutlineButton>
                </a>
                <a href="https://www.linkedin.com/in/viniciuss-so/">  
                  <OutlineButton> <LinkedinLogo size={32}/></OutlineButton>
                </a>
              </div>
            </div>
          </div>

          <CaretDoubleDown className='animate-bounce' size={30}/>
          <div className='w-screen bg-gradient-to-br from-white via-white to-blueBrand'></div>
      </article>

      <main >
          <img src={Title} className='mt-20 ' />
          <div className='flex flex-col items-center'>
            <ProjectItem 
            src='/RocketTodo.png' 
            alt='Imagem do projeto' 
            title='Todo list React'
            description='O TodoList React é um projeto que visa simplificar e aprimorar a forma como as pessoas gerenciam suas tarefas diárias. Em um mundo cada vez mais agitado, manter-se organizado é essencial para o sucesso pessoal e profissional. Este projeto tem como objetivo criar uma aplicação web moderna e intuitiva que ajude os usuários a manterem o controle de suas tarefas de maneira eficiente e eficaz.'
            link="https://todolist-react-ld.netlify.app/"
            />
              <Separator className='bg-textColor/50 w-4/5'/>
            <ProjectItem 
            src='/UploadAi.png' 
            alt='Imagem do projeto' 
            title='Upload Ai'
            description='O Upload AI é uma plataforma de transcrição de vídeos baseada em inteligência artificial. Ele permite aos usuários fazer upload de vídeos e obter transcrições precisas em tempo recorde. Algumas das principais tecnologias são: React, taildwindcss, shadcn/ui, NodeJs, Fastify, Prisma e OpenAi Api'
            link="https://uploadainlw.netlify.app/"
            />
              <Separator className='bg-textColor/50 w-4/5'/>
            <ProjectItem 
            src='/CoffeeDelivery.png' 
            alt='Imagem do projeto' 
            title='Coffee Delivery'
            description='O Coffee Delivery é um site de pedidos de café desenvolvido para atender às necessidades de amantes de café que desejam desfrutar de uma xícara de café de qualidade no conforto de suas casas ou escritórios. O projeto esta sendo desenvolvido com as seguintes Tecnologias: React, Vite, StyledComponents e react-router. O projeto ainda esta em desenvolvimento, funcionalidades como a de carrinho ainda não estão implementadas'
            link="https://cooffeedelivery.netlify.app/"
            />
              <Separator className='bg-textColor/50 w-4/5'/>
            <ProjectItem 
            src='/Portifolio.png' 
            alt='Imagem do projeto' 
            title='Portifolio de Projetos'
            description='Meu portfólio é uma página web que destaca minhas habilidades e projetos. Aqui, você encontrará informações sobre mim, meus objetivos profissionais e uma seleção de projetos mais recentes nos quais trabalhei. Algumas das tecnologias principais do projeto são React, Tailwind e Figma. O projeto ainda está em andamento, como pode ser visto no site. Existem muitas coisas a serem adicionadas e implementadas, como as páginas de projetos e contatos, além da responsividade para dispositivos móveis.'
            link="https://vinicius-so-portifolio.netlify.app/"
            />  

          </div>
      </main>

      <article>

      </article>
    </>
  );
}

export default App;
