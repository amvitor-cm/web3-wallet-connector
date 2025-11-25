import WalletConnector from './components/WalletConnector';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Web3 Wallet Connector
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clean, production-ready Ethereum wallet connection interface with real-time balance and network monitoring.
          </p>
        </header>
        
        <main>
          <WalletConnector />
        </main>
      </div>
    </div>
  );
}

export default App;
