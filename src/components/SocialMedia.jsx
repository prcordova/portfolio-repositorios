import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialMedia.module.scss';

function SocialMedia() {
    return (
        <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/pedroricardocordova">
                 {/* <FontAwesomeIcon icon={faStar}/> */}
            </a>
        </div>
    )
}
export default SocialMedia;