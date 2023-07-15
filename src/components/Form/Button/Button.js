import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export default function Button(props) {
    const btnClass = `${props.class} ${props.isLoading ? 'btn-disabled' : ''}`;
    return (
        <>
            <button className={btnClass} type={props.type}>
                {
                    props.isLoading ?
                        (<FontAwesomeIcon icon={faCircleNotch} spin />)
                    :
                        (props.label)
                }
            </button>
        </>
    );
}
