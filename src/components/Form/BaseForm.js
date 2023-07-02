import './BaseForm.css';
import Button from './Button';

export default function BaseForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit();
    }

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <h1>{props.title}</h1>
                <form onSubmit={handleSubmit}>
                    {props.children}

                    <Button class='submit-btn' type='submit' label={props.submitLabel} />
                </form>
            </div>
        </div>
    );
}
