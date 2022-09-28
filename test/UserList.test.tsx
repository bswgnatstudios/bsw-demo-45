import React from 'react';
import UserList from '../src/screen/UserList/index';
import {cleanup, waitFor} from '@testing-library/react-native';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';

const navigation = { navigate: jest.fn() };

const navigate = jest.fn();
describe('When rendering home', () => {
  afterEach(cleanup);
  // beforeEach(jest.useFakeTimers());
  it('Should render correctly', async () => {
    await waitFor(() => {
      renderWithRedux(<UserList navigation={navigate} />);
    });
  });
});