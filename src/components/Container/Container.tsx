import "./styles/Container.css";

interface ContainerProps {
  children?: React.ReactNode
}


/**
 * Позволяет разместить элементы UI в пределах сетки
 */
export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div className="Container">
      {props.children}
    </div>
  );
}
