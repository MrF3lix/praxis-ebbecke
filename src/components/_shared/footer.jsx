import React from 'react'

const Footer = () => (
    <footer>
        <div className="info__container">
            <div className="inner">
                <div className="address">
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
        </div>
        <div className="links__container">
            <div className="inner">
                <p>© 2018 Saaro Webdesign - Alle Rechte vorbehalten</p>
                <div className="links">
                    <a>Impressum</a>
                    <a>Datenschutz</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer