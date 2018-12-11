import React from 'react'
import { connect } from 'react-redux'

const Footer = ({ times, address }) => (
    <footer>
        <div className="info__container">
            <div className="inner">
                <div className="address">
                    {address != null &&
                        <React.Fragment>
                            <h4>{address.name}</h4>
                            <p>{address.street}, {address.zip} {address.city}</p>
                            <p>{address.phone}</p>
                            <p>{address.email}</p>
                        </React.Fragment>
                    }
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
    times: state.global.times,
    address: state.global.address
})

export default connect(mapStateToProps, null)(Footer)