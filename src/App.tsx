
import Banner from './components/Banner/Banner';
import Project from './components/Projects/Projects';
import siteNosconectados from './assets/printNosConectados.png';
import siteSolidaApp from './assets/printSolidaApp.png';
import siteYasmin from './assets/SiteYasmin.png'
import TechStack from './components/TechStack/TechStack';
import ContactForm from './components/ContactForm/ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS

AOS.init({
  duration: 1000, // Duração da animação em milissegundos
});


function App() {
  return (
    <>
      <Banner />
      <TechStack />
      <Project
        imageSrc="imagem-normal.jpg" // Certifique-se de que esse caminho também está correto ou importe a imagem se necessário
        imageAlt="Imagem do Projeto"
        backgroundColor="#7eafb7"
        fontColor="#F5F5F5"
        hoverImageSrc={siteNosconectados}
        hoverImageAlt="Imagem em Preto e Branco"
        title="nosconectados"
        description="NOSCONECTADOS é uma plataforma web desenvolvida para o gerenciamento de sensores IoT, com foco na otimização do manejo integrado de pragas na agricultura. Através da coleta e análise de dados em tempo real, o sistema auxilia os agricultores a tomarem decisões mais assertivas. Iniciado como uma iniciativa acadêmica da Universidade Federal de Pelotas (UFPel), o projeto conta com o apoio do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), e busca impulsionar o desenvolvimento tecnológico em Pelotas e em toda a região sul do Rio Grande do Sul."
        imagePosition="right" 
        slideEffect="fade-right"
      />
      <Project
        imageSrc="imagem-normal.jpg" // Certifique-se de que esse caminho também está correto ou importe a imagem se necessário
        imageAlt="Imagem do Projeto"
        backgroundColor='#353535'
        fontColor="#F5F5F5"
        hoverImageSrc={siteSolidaApp}
        hoverImageAlt="Imagem em Preto e Branco"
        title="Solida App"
        description="O Solida APP foi criado como um MVP no Hackathon HSClima, com o objetivo de conectar pessoas afetadas por crises climáticas a voluntários e autoridades. A plataforma utiliza tecnologias modernas como React para a interface, Node.js, Express e AdonisJS para o backend, além de Postgres para o armazenamento de dados. Oferece funcionalidades essenciais, como a identificação de áreas vulneráveis, facilitando a conexão entre necessitados e voluntários, além de integrar forças de segurança para uma resposta rápida e coordenada. O Solida APP busca promover solidariedade em momentos críticos, evidenciando a aplicação de soluções tecnológicas para superar desafios emergenciais."
        imagePosition="left" 
        slideEffect="fade-left"
      />
            <Project
        imageSrc="imagem-normal.jpg" // Certifique-se de que esse caminho também está correto ou importe a imagem se necessário
        imageAlt="Imagem do Projeto"
        hoverImageSrc={siteYasmin}
        hoverImageAlt="Imagem em Preto e Branco"
        title="Eu, Yasmin"
        description="Este portfólio foi criado para uma aluna de jornalismo, utilizando VueJS. O objetivo foi desenvolver um site rápido e leve, sem custos, para promover e divulgar o trabalho de Yasmin (também conhecida como o 'amor da minha vida) "
        imagePosition="right"
        slideEffect="fade-right"
      />
      <ContactForm/>
    </>
  );
}

export default App;
