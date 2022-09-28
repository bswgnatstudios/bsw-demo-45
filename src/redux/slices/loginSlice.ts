import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LoginData {
  email: string;
  password: string;
  token: string;
}

const loginUserList = [
  {email: 'test@mail.com', password: '123456', token: 'token123'},
  {email: 'test1@mail.com', password: '123456', token: 'token124'},
];

interface IinitialState {
  loginData: LoginData;
  loading: boolean;
  token: string;
  error: string;
}

const initialState: IinitialState = {
  loginData: {} as LoginData,
  loading: false,
  token: '',
  error: '',
};

const loginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    loginInUser: (state, action: PayloadAction<LoginData>) => {
      state.loading = true;
      state.error = '';
      const data = loginUserList.filter(
        user => user.email === action.payload.email,
      ) as LoginData[];
      if (data.length > 0) {
        state.loading = false;
        if (data[0].password === action.payload.password) {
          state.loginData = data[0];
        } else {
          state.loginData = {} as LoginData;
          state.error = 'Invalid credentials';
        }
      } else {
        state.loading = false;
        state.loginData = {} as LoginData;
        state.error = 'Invalid user';
      }
    },
  },
});

export const {loginInUser} = loginSlice.actions;
export default loginSlice.reducer;
