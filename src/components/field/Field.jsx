import './style.scss'

const Field = (props) => {
  const {
    currentId,
    text,
    placeholder,
    autocomplete,
    minLength,
    maxLength,
    inputValue = '',
    type = 'text',
    pattern = null
  } =
    props

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
                autoComplete={ autocomplete }
                name={ currentId }
                id={ currentId }
                placeholder={ placeholder }
                maxLength={maxLength}
                minLength={minLength}
                defaultValue={inputValue}
                typeof={type}
                pattern={pattern}
            />
        </div>
  )
}

export default Field
