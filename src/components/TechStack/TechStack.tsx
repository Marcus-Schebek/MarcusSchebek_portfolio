import React from 'react';
import './TechStack.css'; // Importa o arquivo CSS

const TechStack: React.FC = () => {
    return (
        <div className="tech-stack-container">
            <h1 className="tech-stack-title">VEJA AQUI MEUS PROJETOS E MINHAS TECNOLOGIAS</h1>
            <div className="tech-icons">
                {/* Lista de todas as tecnologias sem separação */}
                <span onClick={() => window.open('https://www.linux.org/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://www.java.com', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://www.php.net', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://spring.io/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://www.w3schools.com/cs/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://www.typescriptlang.org/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://reactjs.org/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://vuejs.org/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://www.docker.com/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://git-scm.com/', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://www.postgresql.org', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
                </span>
                <span onClick={() => window.open('https://postman.com', '_blank')} style={{ cursor: 'pointer' }}>
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
                </span>
            </div>
        </div>
    );
};

export default TechStack;
