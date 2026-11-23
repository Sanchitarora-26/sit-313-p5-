
const galleryImages = [
  { src: '/images/IMG_9176.jpg', alt: 'Vrindavan visit 1' },
  { src: '/images/IMG_9178.JPG', alt: 'Vrindavan visit 2' },
  { src: '/images/IMG_9187.JPG', alt: 'Vrindavan visit 3' },
  { src: '/images/IMG_9232.JPG', alt: 'Vrindavan visit 4' },
  { src: '/images/IMG_9233.JPG', alt: 'Vrindavan visit 5' },
  { src: '/images/IMG_9461.jpg', alt: 'Vrindavan visit 6' }
];

function Portfolio() {
  return (
    <>
      <section className="hero" id="top">
        <img
          src="/images/IMG_8875.jpg"
          alt="My Vrindavan visit"
        />
        <div className="hero-text">
          <p className="eyebrow">VRINDAVAN DIARIES</p>
          <h1>My Journey to Vrindavan</h1>
          <p>Exploring temples, spirituality and beautiful memories.</p>
        </div>
      </section>

      <section className="about" id="about">
        <img
          className="profile"
          src="/images/IMG_8674.jpg"
          alt="Sanchit Arora"
        />
        <div>
          <p className="eyebrow">ABOUT MY JOURNEY</p>
          <h2>Exploring Vrindavan</h2>
          <p>
            Vrindavan is a beautiful place known for its temples,
            culture and spiritual atmosphere. During my visit,
            I explored memorable places, captured photographs
            and experienced the peaceful surroundings.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <p className="eyebrow">MY MEMORIES</p>
        <h2>Vrindavan Gallery</h2>
        <div className="gallery">
          {galleryImages.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Contact</h2>
        <p>
          <a href="mailto:sanchit9085.ai25@chitkara.edu.in">
            sanchit9085.ai25@chitkara.edu.in
          </a>
        </p>
      </section>
    </>
  );
}

export default Portfolio;
