import styled from 'styled-components';

// Tela de login

// Fundo
export const MainStyle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background-color: rgb(67, 86, 96); */
  background: #CECECE;
  background: -moz-linear-gradient(-45deg, #CECECE 0%, #1C6EA4 62%, #000000 100%);
  background: -webkit-linear-gradient(-45deg, #CECECE 0%, #1C6EA4 62%, #000000 100%);
    background: linear-gradient(135deg, #959cae 0%, #244353 62%, #000000 100%);
    footer {
      text-align: center;
      margin-bottom: 15px;
      color: #7c7676
    }
`;

export const Nav = styled.nav`
  display: flex;
  margin-top: 6px;
  margin-left: 8px;
  a{
    margin-left: 2px;
    margin-right: 13px;
    margin-top: 3px;
    &:visited {
      color:black;
    }
  }
`;

export const Container = styled.div`
  padding:15px 30px 35px 30px;
  border-radius: 20px;
  border-width: 1px;
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 16px 1px rgba(147, 162, 163, 0.795);
  color:rgb(26, 62, 82);
  margin: auto;
  button {
    margin-left: 40%;
    margin-top: 20px;
    padding: 2px 15px;
  }
  img{
    width: 250px;
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
display:flex;
width:55px;
`;

export const Input = styled.input`
display: block;
border-color:rgba(49, 62, 70, 0.521) ;
border-radius: 10px;
padding-left: 10px;
`;

// export const ButtonLogin = styled.button`
//   margin-top: 5px;
//   display: flex;

// `;

export const ElementsStyle = styled.div`
   display:flex; 
   margin: 10px;
   flex-direction: row;

`;

// não utilizado

// export const InputWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     /* background-color: red; */
//   `;

// Tela da tabela e do formulário

export const WalletMainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #CECECE;
    background: -moz-linear-gradient(-45deg, #CECECE 0%, #1C6EA4 62%, #000000 100%);
    background: -webkit-linear-gradient(-45deg, #CECECE 0%, #1C6EA4 62%, #000000 100%);
    background: linear-gradient(135deg, #959cae 0%, #244353 62%, #000000 100%);
`;

export const HeaderStyle = styled.header`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row ;
  justify-content: flex-end;
  width: 100%;
  color: white;
`;

export const NavHeader = styled.nav`
  /* display: flex; */
  /* margin-top: 6px; */
  /* margin-left: 8px; */
  a{
    /* margin-left: 2px; */
    /* margin-right: 13px; */
    /* margin-top: 3px; */
    &:visited {
      color:black;
    }
  }
`;

export const FormWalletStyle = styled.div`
  background-color:  rgba(45, 55, 63, 0.795);
  display: flex;
  flex-direction: row ;
  width: 100%;
  padding: 40px 0px;
  justify-content: center;
  color: white;
`;

export const Inputt = styled.input`
  margin: 0 15px 0 2px;
  display: inline;
  max-width: 100px;
  text-align: center;
  border-radius: 5px;
  &:hover {
      border: 2px solid black;
  }
`;
export const WalletButton = styled.button`
  margin: 0 10px;
  padding: 2px;
  border-radius: 5px;
  &:hover {
      border: 2px solid #000000;
  }
`;

export const Select = styled.select`
  margin: 0 16px 0 2px;
  display: inline;
  max-width: 100px;
  text-align: center;
  border-radius: 5px;
  &:hover {
      border: 2px solid black;
  }

`;

// Tabela

export const TableStyle = styled.div`
    background-color: #447183;
    margin-top: 25px;
    padding: 20px 0px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    color: white;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    border-collapse: collapse;

    

    th{
      /* border-bottom: #1c3e4b; */
      padding-bottom: 20px;

    }

    td {
      padding: 10px;
    }

  

`;
export const Trem = styled.div`
  background-color: tomato;
`;

// export const TableContainer = styled.div`

//   background-color: red;
// `;
