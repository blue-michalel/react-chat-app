import { StoreApi } from 'zustand';

export const createAsyncAction =
  (set: StoreApi<unknown>['setState']) =>
  async (
    action: () => Promise<void>,
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    try {
      set({ loading: true, error: null });
      await action();
      onSuccess?.();
    } catch (error) {
      set({ error: error });
      onError?.();
    } finally {
      set({ loading: false });
    }
  };
