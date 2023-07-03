import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (payload) => {
    console.log('URL : ', process.env.REACT_APP_BASE_API_URL);
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

        return { accessToken: token, refreshToken: refresh_token };
    } catch (error) {
        throw new Error(error.response?.data.message ?? 'Error while authenticating user');
    }
});

export const logout = createAsyncThunk('auth/logout', async (accessToken) => {
    try {
        await axios.post(
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
    accessToken: null,
    refreshToken: null,
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
                state.loading = false;
                state.error = null;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
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
                state.accessToken = null;
                state.refreshToken = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
      },
});

export const { setAccessToken, setRefreshToken } = authSlice.actions;

export default authSlice.reducer;
