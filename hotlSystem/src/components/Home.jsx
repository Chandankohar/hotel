import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
     const [menuOpen, setMenuOpen] = useState(false);
    const rooms=[
        {
            name:"Deluxe Suite", 
            link:'https://www.maldiveschanthaburi.com/wp-content/uploads/2021/01/Deluxe_Suite_Room_with_Seaview-3.jpg'

        },
         {
            name:"Executive Room", 
            link:'https://www.landmarkyelagiri.com/wp-content/uploads/2018/03/Elegance-room-1.jpg'

        },
         {
            name:"Sea View Room", 
            link:'https://en.izu-hamanoyu.co.jp/room/img/room20.jpg'

        }
    ]

    const gallery=[
        {link:'https://media-cdn.tripadvisor.com/media/photo-s/18/05/24/41/best-swimming-pool-in.jpg'},
        {link:'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/08/11133120/man-wah-1.jpeg'},
        {link:'https://pacificsunpoolandspa.com/wp-content/uploads/2015/04/shutterstock_129240386.jpg'}
    ]
    return (
        <>
              <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>HOTEL</div>
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
            <section className={styles.hero}>
                <h1>Luxury Stay</h1>
                <p>Experience comfort, elegance, and unforgettable moments at our luxury hotel.</p>
                <button className={styles.btn}>Book Now</button>
            </section>

            <section id="about" className={styles.container}>
                <h2>About Us</h2>
                <div className={styles.aboutcontent}>
                    <img
                        className={styles.aboutimage}
                        src="https://wallpaperaccess.com/full/2690586.jpg"
                        alt="Hotel Lobby"
                    />
                    <p className={styles.aboutparagraph}>
                        Welcome to HOTEL, your perfect getaway. Whether you're here for leisure or business, our world-class services and serene ambiance ensure a delightful stay. Let us make your experience extraordinary.
                    </p>
                </div>
            </section>

            <section id="services" className={styles.container}>
                
                <h2>Our Services</h2>
                <div className={styles.serviceItems}>
                    <div className={styles.serviceCard}>
                        <span className={styles.serviceIcon}>🛎️</span> 24/7 Concierge
                    </div>
                    <div className={styles.serviceCard}>
                        <span className={styles.serviceIcon}>🍽️</span> Fine Dining
                    </div>
                    <div className={styles.serviceCard}>
                        <span className={styles.serviceIcon}>🏊‍♂️</span> Infinity Pool
                    </div>
                    <div className={styles.serviceCard}>
                        <span className={styles.serviceIcon}>💆‍♀️</span> Spa & Wellness
                    </div>
                </div>
            </section>

            <section id="rooms" className={styles.container}>
                 
                <h2>Our Rooms</h2>

                <div className={styles.roomCards}>
                    {rooms.map((room, index) => (
                        <div className={styles.roomCard} key={index}>
                            <img
                                src={room.link}
                                alt={room.name+index}
                            />
                            <div className={styles.roomContent}>
                                <div className={styles.roomTitle}>{room.name}</div>
                                <div className={styles.roomPrice}>₹ {5000 + index * 2000} / night</div>
                                <div className={styles.roomDesc}>
                                    Spacious, elegant, and fully equipped. Ideal for relaxation and comfort.
                                </div>
                                <button className={styles.btn}>Reserve</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="gallery" className={styles.container}>
                 
                <h2>Gallery</h2>

                <div className={styles.gallery}>
                    {gallery.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.link}
                            alt={`Gallery ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            <section id="contact" className={styles.container}>
                 
                <h2>Contact Us</h2>

                <p>Email: contact@luxhotel.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Address: 123 Beachside Road, Goa, India</p>
            </section>

            <footer className={styles.footer}>
                © 2025 HOTEL. All rights reserved.
            </footer>
        </>
    );
};

export default Home;
