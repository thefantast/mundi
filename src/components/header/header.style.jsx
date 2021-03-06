
   
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 100px;
    min-height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-right: 80px;
    padding-left: 150px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    color: #fff;
    font-family: MigraExtraBold;
    letter-spacing: 0.05em;
    font-size: 30px;
    
`

export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
> p {
    font-family: Fuji;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    letter-spacing: 0.15em;x
    &:hover {
        font-weight: 900;
        color: #cd8af9;
        transform: translate(0%, -30%);
        transition: 0.3s ease-out;
    }
}
`;


