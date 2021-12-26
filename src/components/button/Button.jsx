import './style.scss'

const Button = ({text, disabled, eventClick, type}) => {
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
