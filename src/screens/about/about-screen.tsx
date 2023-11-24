import SectionTitle from '../../components/section-title/section-title'

import './style.css'

const About = () => {
  return (
    <div
      className="full-screen full-screen__about"
      style={{
        backgroundImage: 'url("images/svg/wave-about.png")'
      }}
    >
      <section className="about-main show-container" id="about">
        <SectionTitle>Sobre</SectionTitle>
        <div className="about-main__content">
          <div className="about-content__left">
            <p>
              Sou um desenvolvedor React com 4 anos de experiência em construir
              aplicativos web de alta qualidade. Possuo um sólido entendimento
              dos conceitos fundamentais do React e habilidades para criar
              interfaces de usuário dinâmicas e complexas utilizando bibliotecas
              e frameworks diversos. Sou bem entrosado com a equipe e com
              excelentes habilidades de comunicação e resolução de problemas,
              além de estar sempre disposto a aprender e aprimorar minhas
              habilidades. Habilidades:
              <ul>
                <li>
                  ☆ Proficiente em React, Typescript, Next, Redux e React Native
                </li>
                <li>
                  ☆ Experiência em usar bibliotecas de interface do usuário
                  populares, como Material-UI, Tailwinds, Styled components
                  etc...
                </li>
                <li>
                  ☆ Familiarizado com renderização no lado do servidor usando
                  Next.js
                </li>
                <li>☆ Conhecimento em controle de versão usando Git </li>
                <li>
                  ☆ Experiência em usar frameworks de teste, como Jest e Cypress
                </li>
                <li>
                  ☆ Habilidades fortes de resolução de problemas e debugging
                </li>
              </ul>
            </p>
          </div>
          <div className="about-content__right">
            <div className="father-circle">
              <div className="son-circle">
                <img
                  src="https://avatars.githubusercontent.com/u/59492647?v=4"
                  alt="Leonardo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
