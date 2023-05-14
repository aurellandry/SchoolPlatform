import './BaseForm.css';

export default function BaseForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit();
    }

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <h1>Sign In</h1>
                <form method={props.method}>
                    {props.children}

                    <button className='submit-btn' type='submit' onClick={handleSubmit}>{props.submitLabel}</button>
                </form>
            </div>
        </div>
    );
}
