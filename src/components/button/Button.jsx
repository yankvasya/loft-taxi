import './style.scss'

import PropTypes from 'prop-types'

const Button = ({ text, disabled, eventClick, type }) => {
  Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    eventClick: PropTypes.func,
    type: PropTypes.string
  }

  const handleClick = e => {
    if (!eventClick) return
    e.preventDefault()
    eventClick(e)
  }

  return (
        <button
            className={disabled ? 'x-button disabled' : 'x-button'}
            onClick={handleClick}
            disabled={disabled}
            type={type}
        >
            {text || 'button'}
        </button>
  )
}

export default Button
