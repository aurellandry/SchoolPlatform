import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseForm from '../../components/Form/BaseForm';
import Input from '../../components/Form/Input';

import './Login.css';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <BaseForm
            method='POST'
            submitLabel='Login'
            onSubmit={handleSubmit}
        >
            <Input
                type={'email'}
                name={'email'}
                placeholder={'Email'}
                value={email}
                onChange={handleEmailChange}
                required={true}
            />
            <Input
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                value={password}
                onChange={handlePasswordChange}
                required={true}
            />
        </BaseForm>
    );
}

export default Login;
