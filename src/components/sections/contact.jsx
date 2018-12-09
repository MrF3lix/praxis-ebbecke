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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9264.385733890887!2d7.84669644579348!3d49.487239125057116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479613f4d97629c5%3A0x39169c445e5d8a10!2sPraxis+f%C3%BCr+Naturheilverfahren%2C+Osteopathie+und+Physiotherapie+Julia+Ebbecke!5e0!3m2!1sde!2snl!4v1544397104449" allowFullScreen></iframe>
        </div>
    </section>
)

export default ContactSection