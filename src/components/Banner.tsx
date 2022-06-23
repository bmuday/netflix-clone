import "./css/Banner.css";

const Banner = () => {
  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h2 className="banner__description">
            {truncate(
              "This is a test descriptionThis is a test descriptionThis is a testdescriptionThis is a test descriptionThis is a test descriptionThisis a test descriptionThis is a test descriptionThis is a testdescriptionThis is a test description",
              150
            )}
          </h2>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
