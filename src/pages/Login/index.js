import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseForm from '../../components/Form/BaseForm';
import Input from '../../components/Form/Input';

import './Login.css';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <BaseForm
            method='POST'
            title='Sign in'
            submitLabel='Login'
            onSubmit={handleSubmit}
        >
            <Input
                type={'email'}
                name={'email'}
                placeholder={'Email'}
                value={email}
                onChange={setEmail}
                required={true}
            />
            <Input
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                value={password}
                onChange={setPassword}
                required={true}
            />
        </BaseForm>
    );
}

export default Login;
