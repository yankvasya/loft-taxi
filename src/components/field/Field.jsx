import './style.scss'

const Field = ({ currentId, text, placeholder, autocomplete, type, minLength, maxLength }) => {
  return (
        <div className="field">
            <label
                className="label"
                htmlFor={ currentId }
            >
                { text }
            </label>
            <input
                className="input"
                type={ type }
                autoComplete={ autocomplete }
                name={ currentId }
                id={ currentId }
                placeholder={ placeholder }
                maxLength={maxLength}
                minLength={minLength}
            />
        </div>
  )
}

export default Field
