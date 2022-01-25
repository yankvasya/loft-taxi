import './style.scss'

const Field = ({ currentId, text, placeholder, autocomplete, type }) => {
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
            />
        </div>
  )
}

export default Field
