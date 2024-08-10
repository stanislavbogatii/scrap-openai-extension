import { createEvent, createStore } from 'effector';

export const taskConfigurationContentActive = createEvent();

export const tasckConfigurationContentInactive = createEvent();

export const $isTaskConfigurationContentActive = createStore(false)
  .on(taskConfigurationContentActive, () => true)
  .on(tasckConfigurationContentInactive, () => false);
