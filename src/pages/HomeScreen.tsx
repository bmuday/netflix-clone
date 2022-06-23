import Banner from "../components/Banner";
import Nav from "../components/Nav";
import "./css/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
    </div>
  );
};

export default HomeScreen;
