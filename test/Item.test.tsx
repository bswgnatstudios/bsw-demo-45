import React from 'react';
import {userObj} from './mockdata/UserData';
import {cleanup} from '@testing-library/react-native';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';
import {IProps} from '../src/screen/UserList/Item/index';
import UserItem from '../src/screen/UserList/Item/index';

describe('When rendering user items', () => {
  afterEach(cleanup);
  const navigation = {navigation: jest.fn()};

  it('Should render correctly', () => {
    const props: IProps = {
      item: userObj,
      onPress: () => {}
    };
    renderWithRedux(<UserItem {...props} />);
  });
});