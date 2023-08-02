import { ReactComponent as Icon} from '../assets/svgs/adventurer-discover-explorer-svgrepo-com.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
    return(
        <Link to="/" className="flex gap-4 items-center">
                <Icon width="56px" height="56px"/>
                <p className="font-bold text-3xl text-on-surface">WorldWise</p>
        </Link>
    )
}