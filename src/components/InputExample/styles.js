import styled from "styled-components";

const ContainerStyles = styled.div`
position: relative;
font-size: 14px;
padding-top: 20px
margin-bottom: 5px;


`;

const PlaceholderStyles = styled.label`
position: absolute;
left: 12px;
top: 50%;
transform: translateY(-50%);
color: #aaa;
transition:
  top 0.3s ease,
  font-size 0.3s ease,
  color 0.3s ease;
`;

const InputField = styled.input`
border:none;
-webkit-appearance:none;
-moz-appeareance:nohne;
appearance: none;
background: #f2f2f2;
padding: 12px;
border-radius: 3px
width: 250px;
outline: none;
font-size: 14px;


&:focus ~ ${PlaceholderStyles} {
  top: -10px;
  front-size: 10px;
  color: #222;
  };

&:valid ~ ${PlaceholderStyles} {
    top: -10px;
    front-size: 10px;
    color: #222;
    }

`;

const InputField2 = styled.input`
background: none;
-webkit-appearance:none;
-moz-appeareance:nohne;
appearance: none;
border-radius: 3px;
width: 250px;
font-size: 14px;
padding: 12px;
border: 2px solid #ddd;
transition: border-color 0.3s ease;

&:focus ~ ${PlaceholderStyles} {
  border-color: #222;
  top: -2px;
  front-size: 10px;
  color: #222;
  transition-delay:0.1s;
  background: #fff;
  };



`;

const InputField3 = styled.input`
border:none;
border-bottom: 1px solid #ccc;
background: #fafafa;
padding: 5px 10px;
-webkit-appearance:none;
-moz-appeareance:nohne;
appearance: none;
outline: none;
border-radius: 0;
border-top-left-radius:3px;
border-top-right-radius:3px;
width: 250px;
font-size: 14px;
padding: 12px;


&:focus {
  border-bottom: 1px solid #222 ;
}
&:focus ~ ${PlaceholderStyles} {
  top: -10px;
  front-size: 10px;
  color: #222;
  transition-delay:0.1s;
  background: #fff;
  };



`;


export  {
  ContainerStyles,
  PlaceholderStyles,
  InputField,
  InputField2,
  InputField3,
}
