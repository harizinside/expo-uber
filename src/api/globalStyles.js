import colors from './colors';

export default {
  activeOpacity: 0.7,
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navHeaderStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
    elevation: 0
  },

  mB8: { marginBottom: 8 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },

  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },

  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 }
};