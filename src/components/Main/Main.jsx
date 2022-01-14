import {Container} from '../Container';
import { MainWrapper } from './MainWrapper';

const Main = ({children}) => {
    return (
        <MainWrapper>
            <Container>{children}</Container>
        </MainWrapper>
    )
}

export default Main;