import "./styles/Button.css";


interface ButtonProps {
  children?: React.ReactNode
}


export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className="Button" type="button">
      {props.children}
    </button>
  );
}
