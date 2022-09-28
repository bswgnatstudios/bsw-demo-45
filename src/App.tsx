import {Provider} from 'react-redux';
import RootStackNavigator from './navigation';
import generateStore from '@redux/stores';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const App = () => {
  return (
    <InternetConnectionAlert
      onChange={connectionState => {
        console.log('Connection State: ', connectionState);
      }}>
      <Provider store={store}>
        <RootStackNavigator />
      </Provider>
    </InternetConnectionAlert>
  );
};

export default App;
