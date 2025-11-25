import { useWallet } from '../hooks/useWallet';

const WalletConnector = () => {
  const { account, balance, chainId, isConnecting, error, connectWallet, disconnectWallet } = useWallet();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getNetworkName = (chainId: number | null) => {
    if (!chainId) return 'Unknown';
    
    const networks: { [key: number]: string } = {
      1: 'Ethereum Mainnet',
      5: 'Goerli Testnet',
      11155111: 'Sepolia Testnet',
      137: 'Polygon Mainnet',
      80001: 'Mumbai Testnet'
    };
    
    return networks[chainId] || `Network ${chainId}`;
  };

  if (account) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Wallet Connected</h2>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600">Address</label>
            <div className="flex items-center gap-2 mt-1">
              <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                {formatAddress(account)}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(account)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                title="Copy address"
              >
                📋
              </button>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-600">Balance</label>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {parseFloat(balance).toFixed(4)} ETH
            </p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-600">Network</label>
            <p className="text-gray-900 mt-1">{getNetworkName(chainId)}</p>
          </div>
        </div>
        
        <button
          onClick={disconnectWallet}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
        >
          Disconnect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-md mx-auto text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">👛</span>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Connect Your Wallet
      </h2>
      
      <p className="text-gray-600 mb-6">
        Connect your Ethereum wallet to get started with our application.
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={connectWallet}
        disabled={isConnecting}
        className="wallet-connector w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-all"
      >
        {isConnecting ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Connecting...
          </span>
        ) : (
          'Connect MetaMask'
        )}
      </button>

      <p className="text-xs text-gray-500 mt-4">
        We support MetaMask and other Ethereum-compatible wallets.
      </p>
    </div>
  );
};

export default WalletConnector;
