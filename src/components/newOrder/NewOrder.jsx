import './style.scss'
import { connect } from 'react-redux'
import Button from '../button/Button'
import { deleteRoute } from '../../modules/actions'

const NewOrderNoData = (props) => {
  const formSubmit = (event) => {
    event.preventDefault()

    props.deleteRoute()
  }

  return (
    <form className="new-order" onSubmit={formSubmit}>
      <h3 className="new-order__title">Заказ размещен</h3>

      <p className="new-order__desc">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>

      <Button
        type="submit"
        text="Сделать новый заказ"
        className="form__submit"
      />
    </form>
  )
}

export const NewOrder = connect(
  state => ({ route: state.routes.route }),
  { deleteRoute }
)(NewOrderNoData)
