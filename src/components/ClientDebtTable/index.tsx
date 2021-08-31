import { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { Container } from './styles';
import { jsonPlaceHolderService } from '../../services/jsonPlaceHolder';
import { User } from '../../services/jsonPlaceHolder/users/index/types';

import imageView from '../../assets/view.png'

export function ClientDebtTable() {
    const [users, setUsers] = useState<User[]>([])

    const loadUser = useCallback(async () => {
        const { data } = await jsonPlaceHolderService.users.index();

        setUsers(data);
    }, [])

    useEffect(() => {
        loadUser()
    }, [loadUser])

    const history = useHistory();



    return (
        <Container>
            <table>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td> {user.name} </td>
                                <td className="tdspacebutton"><button onClick={() => {
                                    history.push('/details', {
                                        id: user.id,
                                        name: user.name
                                    })
                                }}><img src={imageView} alt="ver mais"/></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}