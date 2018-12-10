import React from 'react'
import { connect } from 'react-redux'

const Footer = ({ times }) => (
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
                        {times.map((time, i) => (
                            <div key={i} className="item">
                                <div className="day">{time.day}</div>
                                <div className="time">{time.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="links__container">
            <div className="inner">
                <p>© 2018 Julia Ebbecke - Alle Rechte vorbehalten</p>
                <div className="links">
                    <a>Impressum</a>
                    <a>Datenschutz</a>
                </div>
            </div>
        </div>
    </footer>
)
const mapStateToProps = state => ({
    times: state.global.times
})

export default connect(mapStateToProps, null)(Footer)