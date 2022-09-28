import {configureStore} from '@reduxjs/toolkit';

import loginReducer from '@redux/slices/loginSlice';
import usersReducer from '@redux/slices/userSlice';
// import themeReducer from '@redux/slices/themeSlice';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';

export function renderWithRedux(renderedComponent) {
  const store = configureStore({
    reducer: {
      login: loginReducer,
      user: usersReducer,
      //   theme: themeReducer,
    },
  });
  return render(<Provider store={store}>{renderedComponent}</Provider>);
}
