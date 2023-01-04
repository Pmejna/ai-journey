/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping */
export const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300,
};

export const fontFamilyPrimary = '"Fira Sans", sans-serif';
export const fontFamilySecondary = '"Lato", sans-serif';

export const typography = {
  h1: {
    fontFamily: fontFamilyPrimary,
    fontSize: "48px",
    lineHeight: "64px",
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontFamily: fontFamilyPrimary,
    fontSize: "40px",
    lineHeight: "48px",
    fontWeight: fontWeight.bold,
  },
  h3: {
    fontFamily: fontFamilyPrimary,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: fontWeight.bold,
  },
  h4: {
    fontFamily: fontFamilyPrimary,
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: fontWeight.bold,
  },
  h5: {
    fontFamily: fontFamilyPrimary,
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: fontWeight.bold,
  },
  h6: {
    fontFamily: fontFamilyPrimary,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: fontWeight.bold,
  },
  subtitleLarge: {
    fontFamily: fontFamilySecondary,
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: fontWeight.regular,
  },
  subtitleSmall: {
    fontFamily: fontFamilySecondary,
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: fontWeight.regular,
  },
  pLarge: {
    fontFamily: fontFamilySecondary,
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: fontWeight.regular,
  },
  pSmall: {
    fontFamily: fontFamilySecondary,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: fontWeight.regular,
  },
} as const;

export type ThemeTypography = typeof typography;
