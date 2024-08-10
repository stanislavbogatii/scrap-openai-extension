import { $isAccountSettingsActive, $isTaskConfigurationContentActive } from '#entities/active-content/model';
import { useUnit } from 'effector-react';
import { AccountSettings } from './components/AccountSettings';
import { TaskConfiguration } from './components/TaskConfiguration';

export const ContentPages = () => {
  const [isAccountSettingsActive, isTaskConfigurationContentActive] = useUnit([$isAccountSettingsActive, $isTaskConfigurationContentActive]);
  return (
    <>
      {isAccountSettingsActive && <AccountSettings/>}
      {isTaskConfigurationContentActive && <TaskConfiguration/>}
    </>
  )
}
