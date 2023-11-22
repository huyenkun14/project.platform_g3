import { Provider } from 'react-redux';
import AppNavigation from './src/navigation';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './src/theme';

export default function App() {
  return (
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </GestureHandlerRootView>
      </Provider>
  );
}
