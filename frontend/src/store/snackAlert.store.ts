import { AlertProperties, AlertSeverity, Alert } from '../interfaces';
import { create } from 'zustand';

const initialState: AlertProperties = {
  message: '',
  severity: AlertSeverity.INFO,
  visible: false
}

export const useSnackAlertStore = create<Alert>()(set => ({
  ...initialState,
  show: ({ message, severity = AlertSeverity.INFO }) => set({
    message, severity, visible: true
  }),
  hide: () => set({ visible: false })
}))