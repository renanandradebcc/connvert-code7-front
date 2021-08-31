import  { useCallback, useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EditDebtModal } from '../../components/EditDebtModal';
import { provaDevService } from '../../services/provaDev';
import { Divida } from '../../services/provaDev/divida/index/types';

import imgExclude from '../../assets/excluir.png'
import imgEdit from '../../assets/editar-arquivo.png'

import * as S from './styles';

interface HistoryProps {
    id: string;
    name: string;
}

export function ClientTableDetails() {
    const location = useLocation<HistoryProps>();

    const { id, name } = location.state

    const [debts, setDebts] = useState<Divida[]>([])
    const [selectedDebt, setSelectedDebt] = useState({} as Divida)
    const [showEditDebtModal, setShowEditDebtModal] = useState(false)

    const loadDebts = useCallback(async () => {
        const { data } = await provaDevService.divida.index()

        const userDebts = data.result.filter((debt) => debt.idUsuario === Number(id))

        setDebts(userDebts);
    }, [id])

    const handleDestroyDebt = async (debtId: string) => {
        await provaDevService.divida.destroy({ dividaId: debtId })
        const removedDebt = debts.filter((debt) => debt._id !== debtId)
        setDebts(removedDebt)
    }

    function handleToggleEditDebtModal() {
        setShowEditDebtModal(oldState => !oldState);
    }

    function handleEditDebt(debt: Divida) {
        setSelectedDebt(debt);


        handleToggleEditDebtModal();
    }

    useEffect(() => {
        loadDebts()
    }, [loadDebts])

    return (
        <S.Container>
            <h2>{name}</h2>
            {
                debts.length > 0 ? (<table>
                    <tbody>
                        {debts.map((debt) => (
                            <tr key={debt._id}>
                                <td>{debt.motivo}</td>
                                <td>
                                    {new Intl.NumberFormat('pt-Bt', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(debt.valor)}
                                </td>

                                <td className="tdspacebutton">
                                    <button
                                        onClick={() =>
                                            handleEditDebt(debt)}
                                    >
                                        <img
                                            src={imgEdit}
                                            alt="Editar"
                                        />
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDestroyDebt(debt._id)}
                                    >
                                        <img
                                            src={imgExclude}
                                            alt="Excluir"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                ) : (
                    <span>Não existe nem uma divida para {name}</span>
                )
            }

            {selectedDebt && (
                <EditDebtModal
                    data={selectedDebt}
                    isOpen={showEditDebtModal}
                    onRequestClose={handleToggleEditDebtModal}
                    refresh={loadDebts}
                />
            )}
            {/* {`${id} ${name}`}
            {debts.map((debt) => (
                <div key={debt._id}>
                    <div>{debt.motivo}</div>
                    <div>{debt.valor}</div>

                    <button onClick={() => handleDestroyDebt(debt._id)}>Excluir</button>
                    <button onClick={() => handleEditDebt(debt)}>Editar</button>
                </div>
            ))}
            <EditDebtModal 
                debtMotivo={selectedDebt.motivo} 
                debValue={selectedDebt.valor} 
                isOpen={showEditDebtModal} 
                onRequestClose={handleToggleEditDebtModal}
            /> */}
        </S.Container>
    )
}
