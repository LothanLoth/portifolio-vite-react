import "./App.css";
import TypeEffect from "./TypeEffect.jsx";

import { useEffect, useState } from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-10 text-center border-t border-yellow-500">
      <p className="text-sm">
        © {new Date().getFullYear()} Marcos Cabral. Todos os direitos
        reservados.
      </p>
      <p className="text-xs mt-1">
        Desenvolvido com <span className="text-yellow-400">React</span>,{" "}
        <span className="text-yellow-400">Tailwind</span> e 💻.
      </p>
    </footer>
  );
}

function ContactSection() {
  return (
    <div
      id="contato"
      className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-yellow-400 text-4xl font-bold mb-6">
        Entre em Contato
      </h2>

      <p className="text-center max-w-xl text-gray-400 mb-10">
        Tem alguma pergunta, proposta ou quer apenas bater um papo? Fique à
        vontade para me enviar uma mensagem!
      </p>

      <form
        action="https://formspree.io/f/mzzvvdnr"
        method="POST"
        className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="bg-black text-white border border-yellow-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="number"
          name="number"
          placeholder="Number"
          required
          className="bg-black text-white border border-yellow-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="bg-black text-white border border-yellow-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="bg-black text-white border border-yellow-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-black py-3 px-6 rounded-md font-bold hover:bg-yellow-600 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

function ScrollSidebar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed top-1/2 -translate-y-1/2 left-2 z-50 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col gap-4  shadow-lg p-4 rounded-lg">
        <li>
          <a href="#inicio" className="hover:text-yellow-500 font-semibold">
            Início
          </a>
        </li>
        <li>
          <a href="#sobre" className="hover:text-yellow-500 font-semibold">
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-yellow-500 font-semibold">
            Habilidades
          </a>
        </li>
        <li>
          <a href="#contato" className="hover:text-yellow-500 font-semibold">
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
}

function Intro({ children }) {
  return (
    <div
      className="absolute inset-0 w-full h-full flex flex-col md:items-start md:justify-center md:px-4 md:z-10  md:top-30 md:left-30 md:text-start
    items-start justify-center text-center px-5 z-10 top-50"
    >
      {children}
    </div>
  );
}

function IconButton({ path, texto, link }) {
  return (
    <>
      <li className="">
        <a href={link} className="flex flex-col items-center group">
          <img
            src={`/src/assets/${path}`}
            alt=""
            className="w-10 transition-transform delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
          <p className="none text-gray-600 group-hover:text-gray-400 transition-colors group-hover:scale-105">
            {texto}
          </p>
        </a>
      </li>
    </>
  );
}

function IntroImage({ path }) {
  return (
    <div
      className="absolute md:inset-0 md:w-[100%] flex md:items-center md:z-0 md:left-[25%]
     items-center z-0 align-middle justify-center top-50"
    >
      <img src={`/src/assets/${path}`} alt="" className="md:w-[40%] w-[85%]" />
    </div>
  );
}

function Navbar({ children }) {
  return (
    <div
      className="flex flex-row  gap-[4.5em] justify-center align-middle
  md:gap-40 md:mt-2"
    >
      {children}
    </div>
  );
}

function NavbarItem({ children, link, source, alt }) {
  return (
    <>
      <a
        href={link}
        className="relative hidden  text-[1.1em] text-[color:var(--secundary-color)] hover:text-yellow-500 font-semibold md:inline-block"
      >
        {children}
      </a>

      <a href={link} className="relative inline-block  md:hidden ">
        <img src={source} alt={alt} className="w-[2.5em]" />
      </a>
    </>
  );
}

function Paragraph({ children }) {
  return (
    <p className="md:text-[1.5em] text-[1.2em] md:font-[500] ">{children}</p>
  );
}

function CardBox({ children, fontW = "normal", fontH = "auto" }) {
  return (
    <p
      className={`text-[1.1em] font-[${fontW}] h-[${fontH}] w-full max-w-3xl  md:text-start text-center`}
    >
      {children}
    </p>
  );
}

function ScreenMax({ children }) {
  return <div className="p-5 min-h-screen">{children}</div>;
}

function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css.png" },
    { name: "JavaScript", icon: "js.png" },
    { name: "React JS", icon: "react.png" },
    { name: "GitHub", icon: "github.png" },
    { name: "Node JS", icon: "node.png" },
    { name: "Tailwind CSS", icon: "tailwind.webp" },

  ];

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-yellow-400 text-4xl font-bold mb-4 text-center">
        {" "}
        Habilidades e Ferramentas{" "}
      </h2>
      <p className="text-center max-w-2xl text-gray-400 mb-10">
        Meu conjunto de habilidades desenvolvido ao longo de estudos e entregas.
      </p>

      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h3 className="text-left text-yellow-400 font-bold mb-4 border-l-4 border-yellow-500 pl-4 text-xl">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-black hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-md p-4 flex flex-col items-center justify-center shadow-md"
            >
              <img
                src={`/src/assets/${skill.icon}`}
                alt={skill.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-yellow-400 text-4xl font-bold mb-4">Sobre Mim</h2>
      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col gap-6">
        <p className="text-gray-300 text-center leading-relaxed px-2">
          Sou um Desenvolvedor Front-end com foco em React, Tailwind CSS e
          JavaScript. Tenho experiência em transformar ideias criativas em
          interfaces modernas e responsivas, utilizando ferramentas como Vite
          para otimização de performance e consumo avançado de APIs. Ajudo
          pequenos negócios e designers a dar vida a projetos digitais com
          eficiência e qualidade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-black text-yellow-400 p-4 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-bold">5+</h4>
            <p className="text-sm text-white">Projetos Concluídos</p>
          </div>
          <div className="bg-black text-yellow-400 p-4 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-bold">2+</h4>
            <p className="text-sm text-white">Projetos em andamento</p>
          </div>
          <div className="bg-black text-yellow-400 p-4 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-bold">1.000+</h4>
            <p className="text-sm text-white">Xícaras de café</p>
          </div>
        </div>
      </div>

      <div className="bg-[#111] p-6 mt-10 rounded-lg shadow-lg w-full max-w-5xl">
        <h3 className="text-2xl font-bold text-yellow-400 text-left border-l-4 border-yellow-500 pl-4 mb-4">
          Meus Valores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black p-4 rounded-md text-white shadow-md hover:bg-yellow-500 hover:text-black transition-all">
            <h4 className="text-lg font-bold mb-2">💡 Inovação</h4>
            <p className="text-sm">
              Vejo a inovação como o motor que impulsiona a evolução
              tecnológica. Gosto de explorar novas ideias, ferramentas e
              abordagens para entregar soluções criativas, funcionais e que se
              destacam pela originalidade.
            </p>
          </div>
          <div className="bg-black p-4 rounded-md text-white shadow-md hover:bg-yellow-500 hover:text-black transition-all">
            <h4 className="text-lg font-bold mb-2">🧼 Código Limpo</h4>
            <p className="text-sm">
              Acredito que um código bem escrito é tão importante quanto o
              resultado final. Valorizo clareza, organização e boas práticas que
              tornam o código legível, escalável e fácil de manter — não apenas
              para mim, mas para qualquer pessoa que o leia.
            </p>
          </div>
          <div className="bg-black p-4 rounded-md text-white shadow-md hover:bg-yellow-500 hover:text-black transition-all">
            <h4 className="text-lg font-bold mb-2">📚 Aprendizado Contínuo</h4>
            <p className="text-sm">
              A tecnologia muda rápido, e é por isso que nunca paro de aprender.
              Estou sempre buscando novas linguagens, frameworks, conceitos e
              experiências que me desafiem e me façam evoluir como
              desenvolvedor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      {/* PRIMEIRA PARTE */}
      <ScreenMax>
        <section id="inicio">
          <main
            className="relative z-50 flex flex-col 
            md:gap-10 md:items-start md:px-36 md:pt-5 
            gap-10 items-start pt-5"
          >
            <Navbar>
              <ScrollSidebar />
              <NavbarItem link="#inicio" source={"/src/assets/home.png"} alt="">
                Inicio
              </NavbarItem>
              <NavbarItem link="#sobre" source={"/src/assets/about.png"} alt="">
                Sobre Mim
              </NavbarItem>
              <NavbarItem
                link="#skills"
                source={"/src/assets/e-book.png"}
                alt=""
              >
                Habilidades
              </NavbarItem>
              <NavbarItem
                link="#contato"
                source={"/src/assets/mail.png"}
                alt=""
              >
                Contato
              </NavbarItem>
            </Navbar>
          </main>

          <Intro>
            <main className="flex flex-col md:gap-6 md:items-start md:px-6 ">
              <Paragraph>
                Olá, me chamo Marcos e sou <TypeEffect />
              </Paragraph>

              <CardBox fontW="500" fontH="10em" sizefont="1.2em">
                Minha paixão é criar experiências digitais intuitivas e
                eficientes, aliando design e funcionalidade para entregar valor
                real ao usuário.
              </CardBox>
            </main>
          </Intro>
          <IntroImage path="loth.png" />

          <ul className="flex flex-row md:gap-8 md:mt-4 md:justify-end relative md:top-170 md:right-90 z-50 justify-center align-bottom top-170 gap-10">
            <IconButton
              link="https://www.linkedin.com/in/marcos-guilherme-cabral-35154926a/"
              path="linkedin.png"
              texto="Linkedin"
              alt="Ícone do Linkedin"
            />
            <IconButton
              link="https://github.com/LothanLoth"
              path="github.png"
              alt="Ícone do GitHub"
              texto="Github"
            />
          </ul>
        </section>
      </ScreenMax>

      {/* Segunda PARTE */}
      <section id="sobre">
        <AboutSection />
      </section>

      {/* Terceira PARTE */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Quarta PARTE */}
      <section id="contato">
        <ContactSection />
      </section>
      <Footer/>
    </>
  );
}

export default App;
