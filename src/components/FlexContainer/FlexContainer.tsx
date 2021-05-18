import "./styles/FlexContainer.css";

interface FlexContainerProps {
  wrap?: boolean,
  alignCenter?: boolean,
  children?: React.ReactNode
}


export const FlexContainer: React.FC<FlexContainerProps> = (props: FlexContainerProps) => {
  let className: string = "FlexContainer";

  if (props.wrap) {
    className += " Wrap";
  }

  if (props.alignCenter) {
    className += " AlignCenter"
  }

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}
