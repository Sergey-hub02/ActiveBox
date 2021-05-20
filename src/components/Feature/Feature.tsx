import "./styles/Feature.css";


interface FeatureProps {
  title: string,
  icon: string,
  description: string
}


export const Feature: React.FC<FeatureProps> = (props: FeatureProps) => {
  return (
    <div className="Feature">
      <header className="Feature__Header">
        <div className="Feature__Icon">
          <img src={props.icon} alt="feature" />
        </div>

        <h4 className="Feature__Title">{props.title}</h4>
      </header>

      <p className="Feature__Description">{props.description}</p>
    </div>
  );
}
