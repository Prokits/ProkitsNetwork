import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data/features.json";

function About() {
  const cardItems = data.features.map((card) => {
    const cardTitle = card.title;
    const cardText = card.text;
    const cardImg = card.image;
    const cardImgAlt = card.image_alt;
    return (
      <Card
        title={cardTitle}
        text={cardText}
        image={require(`./images/illustrations/about/${cardImg}`)}
        alt={cardImgAlt}
      />
    );
  });

  return (
    <>
      <div className="container">
        <article className="about">
          <div>
            <img
              src={require("./images/illustrations/about/sunset.png")}
              alt="a cartoon girl looking at sunset"
            />
          </div>
          <h1>About Us</h1>
          <p>
            Welcome to our company, where we strive to provide affordable and
            reliable high-speed internet access to college students.
          </p>
          <p>
            We understand the importance of staying connected and having access
            to fast internet, which is why we have dedicated ourselves to
            providing the best service at the most affordable price. Our team is
            made up of experts in the field of internet service, who are
            passionate about providing the best service to our customers.
          </p>
          <p>
            We use the latest technology and equipment to ensure that our
            network is built for speed and reliability. We also understand the
            importance of security and privacy when it comes to internet
            service, which is why we take measures to ensure your personal
            information and online activity is kept secure and private.
          </p>
          <p>
            We are committed to providing excellent customer service and
            support. Our dedicated team is always ready to assist you with any
            questions or concerns you may have. We believe in transparency and
            honesty, which is why we have no hidden fees and no long-term
            contracts.
          </p>
          <p>
            We are proud to offer a variety of plans to fit your needs,
            including unlimited data options. We also offer flexible billing
            options and easy online sign-up and account management.
          </p>
          <p>
            Thank you for considering our company for your internet service
            needs. We are confident that you will be satisfied with our service
            and our commitment to providing the best internet experience for
            college students.
          </p>
        </article>

        <article>
          <h1>Why use ProkitsNetwork?</h1>
          <div className="card_container">{cardItems}</div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default About;
