import "./styles/Container.css";

interface ContainerProps {
  children?: React.ReactNode
}


export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div className="Container">
      {props.children}
    </div>
  );
}
