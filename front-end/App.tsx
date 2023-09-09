import { Provider } from 'react-redux';
import AppNavigation from './src/navigation';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <Provider store={store}>

        <AppNavigation />
    </Provider>
  );
}
