/* eslint-disable max-lines-per-function */
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { Button, View } from './core';

interface NumpadProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export const Numpad = ({ input, setInput }: NumpadProps) => {
  const onButtonPressHandle = (value: number) => {
    setInput(input + '' + value);
  };

  return (
    <View className="gap-4">
      <View className="flex flex-row items-center justify-between">
        <Button
          testID="keypad-button"
          label="1"
          variant="plain"
          onPress={() => onButtonPressHandle(1)}
        />
        <Button
          testID="keypad-button"
          label="2"
          variant="plain"
          onPress={() => onButtonPressHandle(2)}
        />
        <Button
          testID="keypad-button"
          label="3"
          variant="plain"
          onPress={() => onButtonPressHandle(3)}
        />
      </View>
      <View className="flex flex-row items-center justify-between">
        <Button
          testID="keypad-button"
          label="4"
          variant="plain"
          onPress={() => onButtonPressHandle(4)}
        />
        <Button
          testID="keypad-button"
          label="5"
          variant="plain"
          onPress={() => onButtonPressHandle(5)}
        />
        <Button
          testID="keypad-button"
          label="6"
          variant="plain"
          onPress={() => onButtonPressHandle(6)}
        />
      </View>
      <View className="flex flex-row items-center justify-between">
        <Button
          testID="keypad-button"
          label="7"
          variant="plain"
          onPress={() => onButtonPressHandle(7)}
        />
        <Button
          testID="keypad-button"
          label="8"
          variant="plain"
          onPress={() => onButtonPressHandle(8)}
        />
        <Button
          testID="keypad-button"
          label="9"
          variant="plain"
          onPress={() => onButtonPressHandle(9)}
        />
      </View>
      <View className="flex flex-row items-center justify-end">
        <Button
          testID="keypad-button"
          // label="."
          variant="plain"
          onPress={() => onButtonPressHandle(7)}
        />
        <Button
          testID="keypad-button"
          label="0"
          variant="plain"
          onPress={() => onButtonPressHandle(0)}
        />
        <Button
          testID="keypad-button"
          label="D"
          variant="plain"
          onPress={() => setInput((prev) => prev.slice(0, prev.length - 1))}
        />
      </View>
    </View>
  );
};
