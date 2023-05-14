import { useState, useEffect } from 'react';
import './Input.css';

export default function Input(props) {
    const [showError, setShowError] = useState(false);
    const [placeholder, setPlaceholder] = useState('');
    const [errorMessage, setErrorMessage] = useState('This field is required !');

    useEffect(() => {
        if (props.placeholder) {
            setPlaceholder(
                props.required ? `${props.placeholder}*` : props.placeholder
            );
        }

        if (props.error) {
            setShowError(true)
            setErrorMessage(props.error)
        } else {
            setErrorMessage('This field is required !');
        }
    }, [props.error, props.placeholder, props.required]);
    

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        if (props.required && !inputValue) {
            console.log('Field should not be empty')
            setShowError(true)
        } else {
            setShowError(false)
        }
        props.onChange(inputValue)
    }

    return (
        <div className='input-block'>
            <input
                className={showError ? 'error' : ''}
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={placeholder}
                onChange={handleInputChange}
                required={props.required}
            />
            <span className={showError ? 'error-message-show' : 'error-message-hide'}>
                {errorMessage}
            </span>
        </div>
    );
}
