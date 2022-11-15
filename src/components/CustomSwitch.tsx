import React, {useContext, useState} from 'react';
import { Switch } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props{
    isOn: boolean;
    onChange: (value:boolean) => void;
}
export const CustomSwitch = ({isOn, onChange}:Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const {theme, theme:{colors}} = useContext(ThemeContext)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };
  return (
    <Switch
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={isEnabled ? theme.secondary : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
  )
}
