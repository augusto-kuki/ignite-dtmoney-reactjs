import { useState } from "react";
import Modal from "react-modal";
import { Dashbaord } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

function App() {
  const [isNewTranscationModalOpen, setIsNewTranscationModal] = useState(false);

  function handleOpenNewTranscationModal() {
    setIsNewTranscationModal(true);
  }
  function handleCloseNewTranscationModal() {
    setIsNewTranscationModal(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransctionModal={handleOpenNewTranscationModal} />
      <Dashbaord />

      <NewTransactionModal
        isOpen={isNewTranscationModalOpen}
        onRequestClose={handleCloseNewTranscationModal}
      />
    </TransactionsProvider>
  );
}

export default App;
