import WalletConnector from './components/WalletConnector';

function App() {
  return (
    <div className="min-h-screen py-12 px-4">
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gradient text-glow mb-4">
            Web3 Wallet
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Experience the future of decentralized finance with our secure and intuitive wallet connector
          </p>
        </header>
        
        <main>
          <WalletConnector />
        </main>

        <footer className="text-center mt-12 opacity-60 text-sm">
          <p>Built for the decentralized web • Secure • Transparent • Yours</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
