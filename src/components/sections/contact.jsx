import React from 'react'
import MapImage from '../../assets/gfx/card.jpg'

const ContactSection = () => (
    <section className="contact">
        <div className="container">
            <div className="address">
                <h2>Kontakt</h2>

                <h4>Praxis für Naturheilverfahren Osteopathie und Physotherapie</h4>
                <p>Auf der Platte 10, 67678 Mehlingen</p>
                <p>+49 6303/80 99 033</p>
                <p> julia.ebbecke@gmail.com</p>
            </div>
            <div className="opening-times">
                <h4>Öffnungszeiten</h4>
                <div className="week">
                    <div className="item">
                        <div className="day">Montag</div>
                        <div className="time">8:00 – 14:00 Uhr und	17:00 – 22:00 Uhr</div>
                    </div>
                    <div className="item">
                        <div className="day">Dienstag</div>
                        <div className="time">8:00 – 14:00 Uhr	und	15:00 – 19:00 Uhr</div>
                    </div>
                    <div className="item">
                        <div className="day">Mittwoch</div>
                        <div className="time">8:00 – 14:00 Uhr</div>
                    </div>
                    <div className="item">
                        <div className="day">Donnerstag</div>
                        <div className="time">8:00 – 14:00 Uhr</div>
                    </div>
                    <div className="item">
                        <div className="day">Freitag</div>
                        <div className="time">8:00 – 13:30 Uhr	und	14:00 – 19:00 Uhr</div>
                    </div>
                </div>
            </div>

        </div>
        <div className="map__container">
            <img src={MapImage} />
        </div>
    </section>
)

export default ContactSection