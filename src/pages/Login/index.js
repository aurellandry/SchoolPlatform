import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/reducers/authSlice';

import BaseForm from '../../components/Form/BaseForm';
import Input from '../../components/Form/Input/Input';

import './Login.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentUser = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.loading);
    const authErrorMsg = useSelector((state) => state.auth.error);

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

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
            title='Connexion'
            submitLabel="Se connecter"
            errors={authErrorMsg}
            onSubmit={handleSubmit}
            isLoading={isLoading}
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
                placeholder={'Mot de passe'}
                value={password}
                onChange={setPassword}
                required={true}
            />
        </BaseForm>
    );
}

export default Login;
