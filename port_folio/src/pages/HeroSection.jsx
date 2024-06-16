const HeroSection = () => {
  return (
    <div className="hero">
      <div className="contentBox">
        <div className="content">
          <p className="title">I`m Hussain</p>
          <h1 className="headerTitle">
            <span className="titleColor">Full stack developer</span>
          </h1>
          <p className="description">
            Lorem, ipsum. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vero
            nesciunt. Repellendus.
          </p>
        </div>
        <button className="tocuh">Get in touch</button>
      </div>
      <div className="image">
        <img src="./images/user.jpg" alt="user" />
      </div>
    </div>
  )
}
export default HeroSection
