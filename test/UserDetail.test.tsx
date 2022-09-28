import React from 'react';
import {userObj} from './mockdata/UserData';
import {cleanup} from '@testing-library/react-native';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';
import UserDetail from '../src/screen/UserDetail/index';

describe('When rendering user items', () => {
  afterEach(cleanup);
  it('Should render correctly', () => {
    const route = {
      params: {
        userDetail: userObj,
      },
    };
    renderWithRedux(<UserDetail route={route} />);
  });
});