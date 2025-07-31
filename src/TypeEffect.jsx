import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypeEffect() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Service-Desk.", "Front-End.", "UI/UX."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy(); // Limpa o efeito quando o componente é desmontado
    };
  }, []);

  return (
    <h1 className="pri-font md:text-[2.5em] text-[1.5em] text-[var(--special-color-sec)]">
      <span ref={el}></span>
    </h1>
  );
}

export default TypeEffect;
