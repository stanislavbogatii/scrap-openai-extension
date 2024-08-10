import { createEvent, createStore } from 'effector';

export const accountSettingsContentActive = createEvent();

export const accountSettingsContentInactive = createEvent();

export const $isAccountSettingsActive = createStore(true)
  .on(accountSettingsContentActive, () => true)
  .on(accountSettingsContentInactive, () => false);
