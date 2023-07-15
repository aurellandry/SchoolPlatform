import { useState, useEffect } from 'react';
import './Select.css';

export default function Select(props) {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (props.error) {
            setShowError(true)
            setErrorMessage(props.error)
        } else {
            setErrorMessage('Veuillez renseigner une valeur.');
        }
    }, [props.error, props.required]);
    

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;

        if (props.required && !selectedValue) {
            setShowError(true)
        } else {
            setShowError(false)
            props.onChange(selectedValue)
        }
    }

    return (
        <div className='select-block'>
            <select
                name={props.name}
                className={showError ? 'error' : ''}
                onChange={handleSelectChange}
                value={props.value}
            >
                <option
                    key={`${props.name}-default`}
                    value={''}
                >
                </option>
                {
                    props.choices.map((choice, index) => {
                        return (
                            <option
                                key={`${props.name}-${index}`}
                                value={choice.value}
                            >
                                {choice.displayValue}
                            </option>
                        )
                    })
                }
            </select>
            <span className={showError ? 'error-message-show' : 'error-message-hide'}>
                {errorMessage}
            </span>
        </div>
    );
}
