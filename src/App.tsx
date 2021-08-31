import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { NewDebtModal } from './components/NewDebtModal';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleToggleNewDebtModal() {
    setIsNewTransactionModalOpen(oldState => !oldState);
  }

  return (
    <>
      <Router>
        
        <Header onOpenNewTranctionModal={handleToggleNewDebtModal} />

        <Routes />

        <NewDebtModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleToggleNewDebtModal}
        />

        <GlobalStyle />
      </Router>
    </>
  )
}

export default App;
