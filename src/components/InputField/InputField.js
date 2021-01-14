import React from "react";
import styled from "styled-components";
import {
  size,
  theme as defaultTheme,
} from '../../utils';


const inputFieldSizes = {
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
};

const getInputFieldStyle = ({variant, color, theme}) => {
  const defaultColor = theme.palette[color]

  const inputOutline = defaultColor && {
    main :{
      border: 'none',
      backgroundColor : defaultColor.main,
      color: defaultColor.contrastText

    }

  }

  const inputSolid = defaultColor && {
    main :{
      border: `1px solid ${defaultColor.main}`,
      backgroundColor : theme.palette.common.white,
      color:  defaultColor.main
    }

  }

  const defaultInputOutline =  {
    main :{
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor : theme.palette.common.white,
      color:theme.palette.common.black
    }

  }

  const defaultInputSolid =  {
    main :{
      border: 'none',
      backgroundColor :theme.palette.grey[100],
      color: theme.palette.common.black

    }

  }


  const variants = {
    outline: defaultColor ? inputOutline : defaultInputOutline,
    solid : defaultColor ? inputSolid : defaultInputSolid
  }

  return variants[variant] || variants.solid

};

const Container  = styled.div`
`;

const StyledInput = ({
  name,
  label,
  defaultValue,
  disabled,
  onChange,
  placeholder,
  value,
  type,
  inputSize,
  color,
  variant,
  theme

})=> {

  if (Object.keys(theme).length === 0){
    theme = defaultTheme;

  }

  const checkInputFiedlStyle = getInputFieldStyle({variant,color,theme})
  const checkInputFieldFontSize = inputFieldSizes[inputSize]?.fontSize
  const checkInputFieldPaddingSize = inputFieldSizes[inputSize]?.padding

  return{


  }

};



export const InputField = styled('input')(StyledInput);
