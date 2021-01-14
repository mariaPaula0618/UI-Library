import styled from "styled-components";
import {
  size,
  theme as defaultTheme,
} from '../../utils';


const getButtonStyle = ({variant, color, theme}) =>{
  const defaultColor = theme.palette[color];

  const btnSolid = defaultColor && {
    main: {
      border: `1px solid ${defaultColor.main}`,
      backgroundColor : defaultColor.main,
      color: defaultColor.contrastText
    },
    hover: {
      border: `1px solid ${defaultColor.light}`,
      backgroundColor: defaultColor.light,
    },
  };
  const defaultBtnSolid = {
    main: {
      border: `1px solid ${theme.palette.grey[100]}`,
      backgroundColor : theme.palette.grey[100],
      color: theme.palette.common.black

    },
    hover: {
      border: `1px solid ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.grey[200],
    },
  };
  const btnOutline = defaultColor && {
    main: {
      border: `1px solid ${defaultColor.main}`,
      backgroundColor : theme.palette.common.white,
      color: defaultColor.main

    },
    hover: {
      border: `1px solid ${defaultColor.light}`,
      backgroundColor: theme.palette.common.white,
      color: defaultColor.light
    },
  };
  const defaultBtnOutline = {
    main: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor : theme.palette.common.white,
      color: theme.palette.common.black

    },
    hover: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color : theme.palette.common.black
    },
  };

  const variants = {
    outline: defaultColor ? btnOutline : defaultBtnOutline,
    solid: defaultColor ? btnSolid : defaultBtnSolid,
  };

  return variants[variant] || variants.solid

  };

const BUTTONSIZES = {
  small: {
     padding: '5px 10px' ,
     fontSize :size['small']
  },
  medium: {
    padding: '10px 20px' ,
    fontSize :size['medium']
 },
 large: {
  padding: '15px 30px',
  fontSize :size['large']
},
}


const styledButton = ({
 buttonSize,
 disabled,
 color,
 variant,
 theme
}) => {

  if (Object.keys(theme).length === 0){
    theme = defaultTheme;

  }

  const checkBtnStyle = getButtonStyle({variant,color,theme})
  const checkBtnFontSize = BUTTONSIZES[buttonSize]?.fontSize
  const checkBtnPaddingSize = BUTTONSIZES[buttonSize]?.padding

  console.log(checkBtnStyle)

  return {
    fontWeight: 400,
    borderRadius:'10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    borderRadius: theme.shape.borderRadius,
    opacity : disabled && 0.7,
    fontFamily: theme.typography.fontFamily,
    padding: BUTTONSIZES.medium.padding,
    fontSize: BUTTONSIZES.medium.fontSize,
    boxShadow: theme.shadows[1],
    ...(checkBtnStyle && checkBtnStyle.main),
    ...(checkBtnPaddingSize && { padding: checkBtnPaddingSize }),
    ...(checkBtnFontSize && { fontSize: checkBtnFontSize }),
    '&:hover': !disabled && {
      boxShadow: theme.shadows[2],
      ...(checkBtnStyle && checkBtnStyle.hover),
    },
  };
};

const IGNORED_PROPS = ['color'];

const buttonConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


export const Button = styled('button',buttonConfig)(styledButton);
