import './style.scss'

const Button = ({text, disabled, eventClick}) => {
    const handleClick = e => {
        e.preventDefault()
        eventClick(e)
    }

    return (
        <button
            className={disabled ? 'x-button disabled' : 'x-button'}
            onClick={handleClick}
            disabled={disabled}
        >
            {text || 'button'}
        </button>
    )
}

export default Button
