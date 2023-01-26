import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Button from "./components/Button";

// Images
import HeroImg from "./images/illustrations/heroImage.png";
import OfficeImg from "./images/illustrations/office.png";
import MessageImg from "./images/illustrations/message.png";

function Homepage() {
  return (
    <>
      <Nav />

      <article className="hero_section">
        <section className="div-center">
          <div>
            <div className="hero_text">
              <p className="branding">
                Infrastructure for the connected world.
              </p>
              <p className="subheading">
                Register with us today and experience the difference in Internet
                service.
              </p>
            </div>
            <Button text="Register Now" />
          </div>
        </section>
        <img src={HeroImg} alt="Two people talking to each other" />
      </article>

      <div className="container">
        <section className="section">
          <div>
            We provide affordable high-speed internet access to college
            students. We understand the importance of staying connected and
            having access to reliable internet, which is why we strive to offer
            the best service at the most affordable price.
          </div>
          <img
            src={OfficeImg}
            alt="A laptop placed on a table using high speed internet"
          />
        </section>

        <section className="qna">
          <h2>
            Why <span>Prokits</span>?
          </h2>
          <div>
            <p>
              Our plans are tailored to meet the needs of college students, with
              fast and reliable internet speeds to help you stay connected and
              productive. Thank you for considering our company for your
              internet service needs. Sign up today and experience the
              difference.
            </p>
            <p>
              We have a dedicated team of experts who are always ready to assist
              you with any questions or concerns you may have. We are committed
              to providing a seamless and stress-free experience for our
              customers.
            </p>
          </div>
          <div>
            <img
              src={MessageImg}
              alt="A person sending email using mobile phone"
            />
            <p className="bold">
              We also understand the importance of security and privacy when it
              comes to internet service. That's why we take measures to ensure
              your personal information and online activity is kept secure and
              private.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
