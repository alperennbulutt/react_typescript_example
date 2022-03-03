import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import settingsReducer from './slices/settings';
import pageTwoReducer from './slices/pageTwoSlice';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['settings']
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  pageTwo: pageTwoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootPersistConfig, rootReducer };
