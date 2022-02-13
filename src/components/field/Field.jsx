import './style.scss'

const Field = (props) => {
  const {
    label,
    text,
    register,
    required,
    errors,
    minLength,
    maxLength,
    pattern,
    defaultValue,
    type = 'text',
    autoComplete
  } =
    props

  return (
        <div className="field">
            <label className="label">
              { text || label }
            </label>
            <input
                { ...register(label, { required, minLength, maxLength, pattern }) }
                defaultValue={ defaultValue }
                type={ type }
                className="input"
                autoComplete={autoComplete}
            />
            {errors[label] && <span className="errors">{ label } is required</span>}
        </div>
  )
}

export default Field
