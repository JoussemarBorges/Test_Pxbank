import { cloneElement } from "react";

const Main = ({ children, ...props }) => {
  const render = children === undefined ? <p>Nenhum componente a ser renderizado</p>
    : children.map ? children.map((child, i) => cloneElement(child, {key: `c-${i}`, ...props}))
    : cloneElement(children, props);

return (
    <main>
    { render }
    </main>
) 
}

export default Main; 