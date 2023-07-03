import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/reducers/authSlice';

import BaseForm from '../../components/Form/BaseForm';
import Input from '../../components/Form/Input';

import './Login.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const accessToken = useSelector((state) => state.auth.accessToken);
    const refreshToken = useSelector((state) => state.auth.refreshToken);

    useEffect(() => {
        if (accessToken) {
            console.log('Access Token:', accessToken);
            navigate('/');
        } else {
          console.log('Access Token is not set');
        }
    }, [accessToken, navigate]);

    useEffect(() => {
        if (refreshToken) {
            console.log('Refresh Token:', refreshToken);
        } else {
          console.log('Refresh Token is not set');
        }
    }, [refreshToken]);

    const handleSubmit = async () => {
        try {
            dispatch(login({
                username: email,
                password
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
