import { useState, useCallback, useEffect, FormEvent } from 'react';
import Modal from 'react-modal'
import { jsonPlaceHolderService } from '../../services/jsonPlaceHolder';
import { User } from '../../services/jsonPlaceHolder/users/index/types';
import { provaDevService } from '../../services/provaDev';

import { Container } from './styles'

import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewDebtModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [clientId, setClientId] = useState('');
    const [reason, setReason] = useState('');
    const [value, setValue] = useState(0);

    const handleCreateNewDebit = async (event: FormEvent) => {
        event.preventDefault()

        const data = {
            idUsuario: Number(clientId),
            motivo: reason,
            valor: Number(value)
        }

        const reponse = await provaDevService.divida.store(data)
        if(reponse.status === 200) {
            setClientId('');
            setReason('');
            setValue(0);
            onRequestClose();

        }
    }

    const [users, setUsers] = useState<User[]>([]) 

    const loadUser = useCallback(async () => {
        const { data } = await jsonPlaceHolderService.users.index();
        
        setUsers(data);
    }, [])
    
    useEffect(() =>{
        loadUser()
    }, [loadUser])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewDebit}>
                <h2>Cadastrar nova divida</h2>

                <select id='users' value={clientId} onChange={({currentTarget: {value}}) => setClientId(value)}>      
                    {users.map(user => 
                        <option
                            key={user.id} 
                            value={user.id}
                        >
                            {user.name}
                        </option>
                    )}
                </select>

                <input 
                    placeholder='Motivo: divida do cartão de crédito'
                    value= {reason}
                    onChange={event => setReason(event.target.value)}
                />

                <input 
                    placeholder='Ex: R$ 500,00'
                    value= {value}
                    onChange={event => setValue(Number(event.target.value))} 
                />

                <button type="submit" >Cadastrar</button>
            </Container>
        </Modal>
    );
}