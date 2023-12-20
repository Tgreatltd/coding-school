import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons'

const Fontawesome = () => {
    return (
        <div>Fontawesome
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faMugHot} />


        </div>
    )
}

export default Fontawesome