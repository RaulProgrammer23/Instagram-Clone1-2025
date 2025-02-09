import { createTransform } from 'redux-persist';

const omitCircularReferences = createTransform(
  (inboundState, key) => {
    // Modifica el estado antes de la persistencia, omitiendo propiedades que puedan causar un ciclo
    if (key === 'socketio') {
      return {}; // Excluye el estado del slice relacionado con sockets
    }
    return inboundState;
  },
  (outboundState, key) => {

    // Modificar el estado al rehidratar (si es necesario)
    return outboundState;
  },
  { whitelist: ['socketio'] } // Aplica esto solo a 'socketio'
);

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [omitCircularReferences],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
