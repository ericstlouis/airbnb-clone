import airbnbLogo from "../images/airbnb2.png";


const Navbar = () => {
  return (
    <nav className="flex sticky top-0 left-0 right-0 items-center h-20 shadow-lg bg-white	">
      <img src={airbnbLogo} alt="airbnb logo" className=" ml-3" />
    </nav>
  );
}

export default Navbar
