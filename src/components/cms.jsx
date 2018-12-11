import React from 'react'
import { connect } from 'react-redux'
import { IconSave } from './_shared/icons'
import { updateContentValue, updateAddressValue, submitAddress, tryGetAddress, updateTimeValue, tryGetContent, tryGetTeam, tryGetTimes, submitContent, submitTeam, submitTimes } from '../actions/cms-actions'

class CMS extends React.Component {

    componentDidMount() {
        this.props.tryGetContent()
        this.props.tryGetTeam()
        this.props.tryGetTimes()
        this.props.tryGetAddress()
        this.checkAuth()
    }
    checkAuth() {
        if (!this.props.global.isAuthenticated) {
            this.props.history.push('/login')
        }
    }
    render() {
        const { content, team, times, address } = this.props.global
        return (
            <main className="cms">
                <div className="inner">
                    <h2>Content</h2>
                    <div className="cms__container">
                        <form onSubmit={(e) => this.props.submitContent(e)}>
                            {content.map((content, i) => (
                                <div key={i} className="content__item">
                                    <label for={content.elementId}>{content.title}</label>
                                    {content.elementId.includes('Body') &&
                                        <textarea
                                            id={content.id}
                                            name={content.id}
                                            onChange={(e) => this.props.updateContentValue(e.target.value, content.id)}
                                        >
                                            {content.content}
                                        </textarea>
                                    }
                                    {!content.elementId.includes('Body') &&
                                        <input
                                            id={content.id}
                                            name={content.id}
                                            type="text"
                                            value={content.content}
                                            onChange={(e) => this.props.updateContentValue(e.target.value, content.id)}
                                        />
                                    }
                                </div>
                            ))}
                            <button type="submit">Speichern</button>
                        </form>
                    </div>
                    <h2>Team</h2>
                    <div className="cms__container team__container">
                        {team.map((member, i) => (
                            <div key={i} className="content__item">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                                <img src={`./assets/gfx/${member.image}`} />
                            </div>
                        ))}
                    </div>
                    <h2>Adresse</h2>
                    <div className="cms__container">
                        {address != null &&
                            <form onSubmit={(e) => this.props.submitAddress(e, address.id)}>
                                <div className="content__item">
                                    <label for={content.elementId}>Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={address.name}
                                        onChange={(e) => this.props.updateAddressValue(e.target.value, 'name')}
                                    />
                                </div>
                                <div className="content__item">
                                    <label for={content.elementId}>Strasse</label>
                                    <input
                                        name="street"
                                        type="text"
                                        value={address.street}
                                        onChange={(e) => this.props.updateAddressValue(e.target.value, 'street')}
                                    />
                                </div>
                                <div className="content__item">
                                    <label for={content.elementId}>PLZ</label>
                                    <input
                                        name="zip"
                                        type="text"
                                        value={address.zip}
                                        onChange={(e) => this.props.updateAddressValue(e.target.value, 'zip')}
                                    />
                                </div>
                                <div className="content__item">
                                    <label for={content.elementId}>Ort</label>
                                    <input
                                        name="city"
                                        type="text"
                                        value={address.city}
                                        onChange={(e) => this.props.updateAddressValue(e.target.value, 'city')}
                                    />
                                </div>
                                <div className="content__item">
                                    <label for={content.elementId}>Telefon</label>
                                    <input
                                        name="phone"
                                        type="text"
                                        value={address.phone}
                                        onChange={(e) => this.props.updateAddressValue(e.target.value, 'phone')}
                                    />
                                </div>
                                <div className="content__item">
                                    <label for={content.elementId}>E-mail</label>
                                    <input
                                        name="email"
                                        type="text"
                                        value={address.email}
                                        onChange={(e) => this.props.updateAddressValue(e.target.value, 'email')}
                                    />
                                </div>
                                <button type="submit">Speichern</button>
                            </form>
                        }
                    </div>

                    <h2>Öffnungszeiten</h2>
                    <div className="cms__container">
                        <div className="times__item">
                            <form onSubmit={(e) => this.props.submitTimes(e)}>
                                {times.map((time, i) => (
                                    <div key={i} className="content__item">
                                        <div className="day">{time.day}</div>
                                        <input
                                            id={time.id}
                                            name={time.id}
                                            type="text"
                                            value={time.value}
                                            onChange={(e) => this.props.updateTimeValue(e.target.value, time.id)}
                                        />
                                    </div>
                                ))}
                                <button type="submit">Speichern</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    tryGetContent: () => dispatch(tryGetContent()),
    tryGetTeam: () => dispatch(tryGetTeam()),
    tryGetTimes: () => dispatch(tryGetTimes()),
    tryGetAddress: () => dispatch(tryGetAddress()),
    submitContent: (e) => dispatch(submitContent(e)),
    submitTeam: (e) => dispatch(submitTeam(e)),
    submitTimes: (e) => dispatch(submitTimes(e)),
    submitAddress: (e, id) => dispatch(submitAddress(e, id)),
    updateContentValue: (value, id) => dispatch(updateContentValue(value, id)),
    updateTimeValue: (value, id) => dispatch(updateTimeValue(value, id)),
    updateAddressValue: (value, id) => dispatch(updateAddressValue(value, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CMS)