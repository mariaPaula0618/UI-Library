import React from 'react';
import {
  theme as defaultTheme,
} from '../../utils';

import {ContainerStyles,InputField,PlaceholderStyles,InputField2,InputField3} from './styles';

const getInputStyle = ({variant, color, theme}) =>{
  const defaultColor = theme.palette[color];

  const variants = {

    standard: defaultColor ? <InputField color = {defaultColor} /> : <InputField color = {theme.palette.grey[100]} /> ,
    outline: defaultColor ? <InputField2 color = {defaultColor} /> : <InputField2 color = {theme.palette.grey[100]} /> ,
    filled:  defaultColor ? <InputField3 color = {defaultColor} /> : <InputField3 color = {theme.palette.grey[100]} />,
  };

  return variants[variant] || variants.standard

  };

  const Input = ({
   type,
   name,
   placeholder,
   color,
   variant,
   theme,
   defaultValue,
   disabled,
   value,
   inputSize,

   }) => {

    if (theme === undefined){
      theme = defaultTheme;

    }

    let InputStyle = getInputStyle({variant,color,theme});
    console.log(InputStyle)

    return (
      <ContainerStyles>
        {InputStyle}
        <PlaceholderStyles>{placeholder}</PlaceholderStyles>
      </ContainerStyles>
    );


};


export { Input};


