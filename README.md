# Web3 Wallet Connector 

A sleek cyberpunk Ethereum wallet connector designed to modernize your dApp. No outdated UI - just fast, futuristic wallet interactions.

## ✨ What It Actually Does

- **Connects to MetaMask** (and other wallets) without the ugly default modals
- **Shows real ETH balance** - no fake data, pulls directly from the blockchain
- **Detects network changes** - so users don't get confused when they switch chains
- **Copies wallet address** - one click instead of manual selection
- **Looks decent on mobile** - because most crypto users are on phones
- **Proper error handling** - when users inevitably click "reject" by accident

## 🚀 Live Demo

[See it in action](https://web3-wallet-connector-mocha.vercel.app/) 

## 🛠 What's Under the Hood

- **React 18 + TypeScript** - for type safety and modern React patterns
- **Ethers.js v6** - because v5 is deprecated and I like staying current
- **Custom CSS** - no UI framework bloat, just clean cyberpunk styling
- **Vite** - because Create React App is slow and I'm impatient

## 🏃‍♂️ Quick Start

```bash
# Clone it
git clone https://github.com/amvitor-cm/web3-wallet-connector.git
cd web3-wallet-connector

# Install dependencies
npm install

# Start local server
npm run dev

# Build for production
npm run build
```

## 💻 Usage

Drop this component anywhere in your app:

```tsx
import WalletConnector from './components/WalletConnector';

function YourApp() {
  return (
    <div>
      <WalletConnector />
    </div>
  );
}
```

## 🎨 Why It Looks Like This

I went with a cyberpunk theme because:
- Most Web3 UIs are either too corporate or too cartoonish
- Dark themes are easier on the eyes during late-night coding sessions
- Glass morphism actually looks good when done right
- The grid background gives that "matrix" feel without being cheesy

## 🔧 What Works Right Now

**Supported Networks:**
- Ethereum Mainnet (where the real money is)
- Goerli Testnet (RIP soon)
- Sepolia Testnet (the new hotness)
- Polygon Mainnet (for lower gas fees)
- Mumbai Testnet (Polygon's testnet)

**Wallet Support:**
- MetaMask (the one everyone uses)
- Any wallet that follows EIP-1193 standard

## 📁 Code Structure

```
src/
├── components/
│   └── WalletConnector.tsx    # Main component with all the UI
├── hooks/
│   └── useWallet.ts           # Handles the wallet connection logic
├── styles/
│   └── globals.css            # All the cyberpunk CSS magic
└── App.tsx                    # Wrapper with cool grid background
```

## 🚀 Deployment

**Vercel (easiest):**
```bash
npm run build
npx vercel --prod
```

**Netlify:**
- Drag the `dist` folder to Netlify
- Done

**Anywhere else:**
- It's a static site, put it wherever

## Known Quirks

- Mobile browsers can be finicky with wallet connections
- Some lesser-known wallets might not work perfectly
- Network detection depends on the wallet providing correct chain IDs
- If MetaMask isn't installed, it shows an error (obviously)

## 🤝 Want to Improve This?

Found a bug? Have a cool idea?
- Open an issue
- Send a PR
- Fork it and make it better

## 📞 Find Me

- **GitHub**: [@amvitor-cm](https://github.com/amvitor-cm)
- **Email**: amvitor.cm@gmail.com
- **Telegram**: @amvitor

## 📄 License

MIT - feel free to use this project for personal or commercial purposes.

---

Built after one too many coffees and the realization that Web3 design deserves better.
