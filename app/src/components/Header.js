import logo from '../icon.png';
export default function Header() {
    return (<><div className="header-brand">
    <img className="header-icon" src={logo} alt="Logo"/>
    <div className="title">Flavor Fusion</div>
    </div>
  <ul className="header-list">
    <li><a href="./">Home</a></li>
    <li><a href="./">Menu</a></li>
    <li><a href="./">Blog</a></li>
    <li><a href="./">Contact</a></li>
  </ul></>)
}