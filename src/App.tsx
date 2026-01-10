import WalletConnector from './components/WalletConnector';

function App() {
  return (
    <div className="min-h-screen px-4 cyber-grid">
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5 subtle-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-5 subtle-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-5 subtle-glow" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px),
                           linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-12">
        <header className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-5xl font-extrabold text-gradient-cyber glitch">
              WEB3 WALLET
            </h1>
          </div>
          <p className="text-xl text-gradient-subtle max-w-2xl mx-auto leading-relaxed font-light">
            Your gateway to the decentralized future. Connect securely and explore the blockchain.
          </p>
        </header>
        
        <main>
          <WalletConnector />
        </main>

        <footer className="text-center mt-20 text-slate-400 text-sm font-light">
          <p>DECENTRALIZED • SECURE • TRANSPARENT • USER-OWNED</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
