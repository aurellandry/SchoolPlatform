import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseForm from '../../components/Form/BaseForm';
import Input from '../../components/Form/Input';

import './Register.css'

export default function Register() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordsError, setPasswordsError] = useState(null);

    const handleSubmit = () => {
        navigate('/');
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setPasswordsError('Passwords are not identical !');
        } else {
            console.log("Haha password")
            setPasswordsError(null);
        }
    }, [password, confirmPassword])
    

    return (
        <BaseForm
            method='POST'
            title='Register'
            submitLabel='Register'
            onSubmit={handleSubmit}
        >
            <Input
                type={'text'}
                name={'firstName'}
                placeholder={'First Name'}
                value={firstName}
                onChange={setFirstName}
                required={true}
            />
            <Input
                type={'text'}
                name={'lastName'}
                placeholder={'Last Name'}
                value={lastName}
                onChange={setLastName}
                required={true}
            />
            <Input
                type={'email'}
                name={'email'}
                placeholder={'Email'}
                value={email}
                onChange={setEmail}
                required={true}
            />
            <Input
                type={'tel'}
                name={'phone'}
                placeholder={'6 XX XX XX XX'}
                value={phone}
                onChange={setPhone}
                required={false}
            />
            <Input
                type={'text'}
                name={'address'}
                placeholder={'Address'}
                value={address}
                onChange={setAddress}
                required={true}
            />
            <Input
                type={'text'}
                name={'city'}
                placeholder={'City'}
                value={city}
                onChange={setCity}
                required={true}
            />
            <Input
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                value={password}
                onChange={setPassword}
                required={true}
                error={passwordsError}
            />
            <Input
                type={'password'}
                name={'confirmPassword'}
                placeholder={'Confirm Password'}
                value={confirmPassword}
                onChange={setConfirmPassword}
                required={true}
                error={passwordsError}
            />
        </BaseForm>
    );
}
