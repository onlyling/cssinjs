import useCacheToken from './hooks/useCacheToken';
import type { CSSInterpolation, CSSObject } from './hooks/useStyleRegister';
import useStyleRegister, { extractStyle } from './hooks/useStyleRegister';
import Keyframes from './Keyframes';
import type { Linter } from './linters';
import {
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
} from './linters';
import { createCache, StyleProvider } from './StyleContext';
import type { DerivativeFunc, TokenType } from './theme';
import { createTheme, Theme } from './theme';
import type { Transformer } from './transformers/interface';
import legacyLogicalPropertiesTransformer from './transformers/legacyLogicalProperties';
import px2remTransformer from './transformers/px2rem';

export {
  Theme,
  createTheme,
  useStyleRegister,
  useCacheToken,
  createCache,
  StyleProvider,
  Keyframes,
  extractStyle,

  // Transformer
  legacyLogicalPropertiesTransformer,
  px2remTransformer,

  // Linters
  logicalPropertiesLinter,
  legacyNotSelectorLinter,
  parentSelectorLinter,
};
export type {
  TokenType,
  CSSObject,
  CSSInterpolation,
  DerivativeFunc,
  Transformer,
  Linter,
};
