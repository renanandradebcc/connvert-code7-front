import { ClientDebtTable } from '../ClientDebtTable';
import {Container} from './styles';

export function Dashboard() {
    return (
        <Container>
            <ClientDebtTable />
        </Container>
    );
}