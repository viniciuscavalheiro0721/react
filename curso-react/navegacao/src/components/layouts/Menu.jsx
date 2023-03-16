import './Menu.css'
import { Link } from 'react-router-dom'
export default props => {
    return (
        <aside className='Menu'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>

                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/aaa">Param #02</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}