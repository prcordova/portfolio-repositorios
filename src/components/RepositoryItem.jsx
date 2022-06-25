import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../styles/repositories.scss'
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description ?? 'Sem descrição'}</p>
            <a href={props.repository.html_url}>
                {'Acessar Repositório'}
            </a>
            <p>{props.repository.created_at}</p>
            <div className="language-container">
                <p>Used :  {props.repository.language}</p>
            </div>
            <div className="star-container">
                <div className="star">
                    <span>
                        {props.repository.stargazers_count}
                    </span>
                    <FontAwesomeIcon icon={faStar} >
                    </FontAwesomeIcon>
                </div>
            </div>
        </li>
    )
}