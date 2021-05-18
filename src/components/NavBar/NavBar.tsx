import "./styles/NavBar.css";


export const NavBar: React.FC<{}> = () => {
  return (
    <nav className="NavBar">
      <a href="#" className="NavBar__Link">Features</a>
      <a href="#" className="NavBar__Link">Works</a>
      <a href="#" className="NavBar__Link">Our Team</a>
      <a href="#" className="NavBar__Link">Testimonials</a>
      <a href="#" className="NavBar__Link">Download</a>
    </nav>
  );
}
