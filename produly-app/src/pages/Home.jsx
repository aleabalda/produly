function Home() {
  return (
    <>
      <h1 className="page-title">Home</h1>
      <div className="page-content">
        <section className="left">
          <p className="home-text">
            Take the first step towards greater productivity today. Create your
            first task right now!
          </p>
          <button className="home-button">Get Started</button>
        </section>
        <section className="right">
          <img
            alt="productivity gif"
            src="https://media.giphy.com/media/aR5rlTveXlgJ91ikaJ/giphy.gif?cid=790b7611i3xt0wxmuemwkc4eyjyswdohdrhuj5pz2bccrtwa&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            className="home-gif"
          ></img>
        </section>
      </div>
    </>
  );
}

export default Home;
