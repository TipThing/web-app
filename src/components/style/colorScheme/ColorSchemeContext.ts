import { ColorScheme } from '@mantine/core';
import { createContext } from 'react';

interface ColorSchemeContext {
  colorScheme: ColorScheme;
  onChange: (colorScheme: ColorScheme) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContext>(
  {} as ColorSchemeContext
);

export default ColorSchemeContext;
