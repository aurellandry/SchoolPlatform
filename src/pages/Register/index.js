import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import BaseForm from '../../components/Form/BaseForm';
import Input from '../../components/Form/Input/Input';
import Select from '../../components/Form/Select';

// import { register } from '../../store/reducers/registerSlice';

import './Register.css'

export default function Register() {
    const USER_ROLES = [
        {
            value: 'ROLE_TEACHER',
            displayValue: 'Teacher',
        },
        {
            value: 'ROLE_STUDENT',
            displayValue: 'Student',
        },
        {
            value: 'ROLE_ADMIN',
            displayValue: 'Admin',
        },
    ];

    // const navigate = useNavigate();

    /* const user = useSelector((state) => state.register.user);
    const error = useSelector((state) => state.register.error); */
    const isLoading = useSelector((state) => state.register.loading);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('')

    const [passwordsError, setPasswordsError] = useState(null);
    const [userRoleError, setUserRoleError] = useState(null);

    const handleSubmit = () => {
        if (!role) {
            setUserRoleError('Veuillez attribuer un rôle à votre utilisateur.');
        } else {
            setUserRoleError(null);
            // navigate('/');
        }
    }

    const handleUserRoleChange = (role) => {
        setRole(role);
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setPasswordsError('Les mots de passes saisis ne sont pas identiques.');
        } else {
            setPasswordsError(null);
        }
    }, [password, confirmPassword]);

    return (
        <BaseForm
            method='POST'
            title='Inscription'
            submitLabel="S'inscrire"
            isLoading={isLoading}
            onSubmit={handleSubmit}
        >
            <Input
                type={'text'}
                name={'firstName'}
                placeholder={'Prénom'}
                value={firstName}
                onChange={setFirstName}
                required={true}
            />
            <Input
                type={'text'}
                name={'lastName'}
                placeholder={'Nom'}
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
                type={'password'}
                name={'password'}
                placeholder={'Mot de passe'}
                value={password}
                onChange={setPassword}
                required={true}
                error={passwordsError}
            />
            <Input
                type={'password'}
                name={'confirmPassword'}
                placeholder={'Confirmer mot de passe'}
                value={confirmPassword}
                onChange={setConfirmPassword}
                required={true}
                error={passwordsError}
            />
            <Select
                name='userRole'
                value={role}
                choices={USER_ROLES}
                required={true}
                onChange={handleUserRoleChange}
                error={userRoleError}
            />
        </BaseForm>
    );
}
