import * as S from './style';
import logoImg from '../../assets/connvert-logo.png';

import {Link} from 'react-router-dom';


interface HeaderProps {
    onOpenNewTranctionModal: () => void;
}

export function Header({ onOpenNewTranctionModal }: HeaderProps) {
    return (
        <S.Container>
            <S.Content>
                <Link to="/">
                    <img src={logoImg} alt="dt money" />
                </Link>
                <button type="button" onClick={onOpenNewTranctionModal}>
                    Nova divida
                </button>
            </S.Content>
        </S.Container>
    )
}