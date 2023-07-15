import './BaseForm.css';
import Button from './Button/Button';

export default function BaseForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!props.isLoading) {
            props.onSubmit();
        } else {
            alert('Formulaire déjà soumis ! Veuillez patienter...')
        }
    }

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <h1>{props.title}</h1>
                { props.errors && <div className='errors'>{props.errors}</div> }
                <form onSubmit={handleSubmit}>
                    {props.children}

                    <Button
                        class='submit-btn'
                        type='submit'
                        label={props.submitLabel}
                        isLoading={props.isLoading}
                    />
                </form>
            </div>
        </div>
    );
}
