import './style.scss'

import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import { ReactComponent as Title } from '../../assets/logo/title.svg'

const Aside = () => (
    <div className="aside">
       <Logo className="logo" />
        <Title className="title" />
    </div>
)

export default Aside
