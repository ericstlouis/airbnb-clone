import airbnbLogo from "../images/airbnb2.png";


const Navbar = () => {
  return (
    <nav className="flex items-center w-full h-20 shadow-lg	">
      <img src={airbnbLogo} alt="airbnb logo" className=" ml-3" />
    </nav>
  );
}

export default Navbar
