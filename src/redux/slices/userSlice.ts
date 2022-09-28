import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from 'redux/types/IUser';
import {client, USER_LIST_API} from '@config/API';

interface IinitialState {
  user: IUser[];
  loading: boolean;
  error?: string;
}

const initialState: IinitialState = {
  user: [],
  loading: false,
  error: '',
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUserList',
  async (): Promise<IUser[]> => {
    return client.get(USER_LIST_API).then(res => res.data);
  },
);

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.user = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
      state.user = [];
    });
  },
});

export default userListSlice.reducer;
