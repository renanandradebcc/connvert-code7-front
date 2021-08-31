import { FormEvent, useEffect, useState  } from 'react';
import Modal from 'react-modal'
import { provaDevService } from '../../services/provaDev';
import { Container } from './styles'

import closeImg from '../../assets/close.svg';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    data: any;
    refresh: () => void;
}

interface PropModal {
    idUsuario: number | string;
    idDivida: number | string;
    _id: string;
    motivo: string;
    valor: number;
}

export function EditDebtModal({ isOpen, onRequestClose, data, refresh }: NewTransactionModalProps) {

    const [reason, setReason] = useState<PropModal>({_id: '' ,idDivida: '', idUsuario: -1, motivo: '', valor: 0});

    useEffect(() => {
        setReason(data)
    }, [data])


    const handleEditModalSubmit = async (event: FormEvent) => {
        event.preventDefault()

        const newData = {
            idDivida: reason._id, 
            idUsuario: reason.idUsuario, 
            motivo: reason.motivo, 
            valor: reason.valor
        }

        const response = await provaDevService.divida.update(newData)
        if(response.status === 200) {
            refresh()
            onRequestClose()
        } 
    } 

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

            <Container onSubmit={handleEditModalSubmit}>
                <h2>Editar divida</h2>

                <input 
                    placeholder='Motivo: divida do cartão de crédito'
                    value={reason?.motivo}
                    onChange={event => setReason({...reason, motivo: event.target.value})}
                />

                <input 
                    placeholder='Ex: R$ 500,00'
                    value= {reason?.valor}
                    onChange={event => setReason((oldState) => {
                        return {...oldState, valor:Number(event.target.value)}
                    })} 
                />

                <button type="submit">Editar</button>
            </Container>
        </Modal>
    );
}