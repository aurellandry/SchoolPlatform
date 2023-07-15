import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('register/register', async (payload) => {
    try {

        await axios.post(
            `${process.env.REACT_APP_BASE_API_URL}/api/register`,
            payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        throw new Error(error.response?.data.message ?? 'Error while registering user');
    }
});

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
      },
});

export const { setLoading } = registerSlice.actions;

export default registerSlice.reducer;
