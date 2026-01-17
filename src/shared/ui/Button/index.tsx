import React, { memo, ReactNode } from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  onPress?: () => void;
  children: ReactNode; // Основной проп для любого контента (ReactNode)
  disabled?: boolean;
  style?: ViewStyle; // Кастомные стили для контейнера
} & PressableProps;

const Button = ({ onPress, children, disabled = false, style, className, ...pressableProps }: ButtonProps) => {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      className={twMerge('bg-accent-main rounded-lg p-3 transition-colors', disabled && 'bg-line-main', className)}
      {...pressableProps}>
      {children}
    </Pressable>
  );
};

export default memo(Button);
