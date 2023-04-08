import { cloneElement } from "react";
import style from '../style/main.module.css'

const Main = ({ children, ...props }) => {
  const render = children === undefined ? <p>Nenhum componente a ser renderizado</p>
    : children.map ? children.map((child, i) => cloneElement(child, {key: `c-${i}`, ...props}))
    : cloneElement(children, props);

return (
    <main className={style.mainContent}>
    { render }
    </main>
) 
}

export default Main; 