import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { decodeJWT } from '../../services/JWTDecoder';

export const login = createAsyncThunk('auth/login', async (payload) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_API_URL}/api/login`,
            payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const { token, refresh_token } = response.data;
        const decodedToken = decodeJWT(token);
        const user = { 
            ...decodedToken.user,
            roles: decodedToken.roles,
            access_token: token,
            refresh_token,
            exp: decodedToken.exp,
            iat: decodedToken.iat
        };

        return { user };
    } catch (error) {
        throw new Error(error.response?.data.message ?? 'Error while authenticating user');
    }
});

export const logout = createAsyncThunk('auth/logout', async (accessToken) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_API_URL}/api/logout`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            }
        );
    } catch (error) {
        throw new Error(error.response?.data.message ?? 'Error while login out user');
    }
});

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loading = false;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.user = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
      },
});

export const { setAccessToken, setRefreshToken } = authSlice.actions;

export default authSlice.reducer;
