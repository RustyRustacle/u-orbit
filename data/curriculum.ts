export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // markdown-style content
}

export interface CodingChallenge {
  title: string;
  description: string;
  starterCode: string;
  expectedPatterns: string[]; // regex patterns the code must match
  hints: string[];
  solution: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  challenge: CodingChallenge;
}

export const curriculum: Module[] = [
  {
    id: "web3-foundations",
    number: 1,
    title: "Web3 Foundations & Blockchain",
    subtitle: "Understanding the Evolution",
    description: "Build a strong foundation by understanding the evolution from Web1 to Web3, how blockchain works, consensus mechanisms, and the blockchain trilemma.",
    icon: "🌐",
    color: "#7C3AED",
    lessons: [
      {
        id: "web-evolution",
        title: "The Evolution of the Web",
        description: "From static pages to decentralized ownership",
        content: `## Web1 (1990-2005): The Read-Only Era

The early internet was a collection of static HTML pages. Users could only **read** content — there was no interaction, no accounts, no social features.

**Key characteristics:**
- Static HTML pages served from single servers
- One-way communication (publisher → reader)
- Examples: GeoCities, AltaVista, early Yahoo

---

## Web2 (2004-Present): The Interactive Era

Web2 brought user-generated content, social media, and cloud computing. Users could **read and write** — but platforms owned everything.

**Key characteristics:**
- User-generated content (posts, videos, reviews)
- Platform-controlled data (Facebook, Google, YouTube)
- Data harvesting: "You are the product"
- Centralized servers control everything

**The Dark Side of Web2:**
- 💰 Platform fees: 30% cuts from creators
- 🔒 Data breaches: Billions of user records leaked
- 📉 Deplatforming: Accounts blocked without cause
- 🎭 Privacy: Tracking without consent

---

## Web3 (2008-Present): The Ownership Era

Web3 introduces **true digital ownership**. Users read, write, and **own** their data, assets, and identity through blockchain technology.

**Key characteristics:**
- Data owned by users, not platforms
- Decentralized infrastructure (no single point of failure)
- Cryptocurrency & tokens for value transfer
- Smart contracts: self-executing code on blockchain
- Permissionless innovation

**The Paradigm Shift:**
\`\`\`
Web2 Platforms    →  Web3 Protocols
"You are the product"  →  "You own your value"
Permission-based    →  Permissionless
Platform risk      →  Protocol certainty
\`\`\``
      },
      {
        id: "what-is-blockchain",
        title: "What is Blockchain?",
        description: "Distributed ledger technology explained",
        content: `## Definition

A blockchain is a **distributed ledger** — a list of records stored in "blocks" of data chained together using cryptographic hashes.

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Block 1   │────▶│   Block 2   │────▶│   Block 3   │
│             │     │             │     │             │
│ Prev: 0x00  │     │ Prev: 0xA1  │     │ Prev: 0xB2  │
│ Hash: 0xA1  │     │ Hash: 0xB2  │     │ Hash: 0xC3  │
│ Data: [Txs] │     │ Data: [Txs] │     │ Data: [Txs] │
└─────────────┘     └─────────────┘     └─────────────┘
\`\`\`

## Core Properties

### 1. Transparent
- Every node has a copy of the blockchain
- All transactions are visible to participants
- Anyone can verify the history

### 2. Secure
- Uses cryptography and digital signatures
- Public/private key pairs prove identity
- Encryption protects sensitive data

### 3. Immutable
- Consensus mechanisms make altering records extremely difficult
- Requires control of majority of the network
- Historical data is permanent

## Cryptographic Hash Functions (SHA-256)

\`\`\`
Input:  "Hello World"
Output: a591a6d40bf420...

Input:  "Hello world" (lowercase 'w')
Output: 64ec88ca00b268...  (completely different!)
\`\`\`

**Properties:**
- ✅ Deterministic: Same input → same output
- ✅ Fast computation
- ✅ Pre-image resistant: Cannot be reversed
- ✅ Avalanche effect: Small change → huge difference
- ✅ Collision resistant: Nearly impossible to find duplicates

## Merkle Trees

Merkle Trees allow efficient verification of data in a blockchain.

\`\`\`
        Root Hash (ABCD)
        /            \\
    Hash AB         Hash CD
    /    \\         /    \\
  Hash A  Hash B  Hash C  Hash D
    |       |       |       |
  Tx 1    Tx 2    Tx 3    Tx 4
\`\`\`

**Why it matters:**
- Verify 1 transaction out of 1000 with only ~10 hashes
- If one transaction changes, the root hash changes
- Enables light clients (mobile wallets) to verify transactions`
      },
      {
        id: "consensus-mechanisms",
        title: "Consensus Mechanisms",
        description: "PoW vs PoS and how networks agree",
        content: `## What is Consensus?

Consensus is how a decentralized network **agrees** on the current state of the blockchain without a central authority.

## Proof of Work (PoW)

Used by Bitcoin, formerly by Ethereum.

\`\`\`
Mining Process:
1. Collect transactions from mempool
2. Create block with transaction data
3. Find nonce where: Hash(block) < Target Difficulty
4. Broadcast valid block to network
5. Network verifies & adds block
6. Miner receives block reward
\`\`\`

**Characteristics:**
- ⚡ Energy intensive: Requires high computational power
- 🔒 Very secure: 51% attack is extremely expensive
- 🐢 Slower: Lower transaction throughput
- 🎯 Proven: Bitcoin running 15+ years without downtime

## Proof of Stake (PoS)

Used by Ethereum after The Merge (Sep 2022).

\`\`\`
Staking Process:
1. Lock cryptocurrency as stake (min 32 ETH)
2. Selected as validator (probability ∝ stake amount)
3. Propose & validate blocks
4. Earn staking rewards (~4% APR)
5. Get slashed if acting maliciously
\`\`\`

**Characteristics:**
- 🌱 Energy efficient: 99.95% less energy than PoW
- ⚡ Faster: Higher throughput
- 💰 Capital requirement: Need significant stake
- 🔐 Economic security: Attackers lose their stake`
      },
      {
        id: "blockchain-trilemma",
        title: "The Blockchain Trilemma",
        description: "Security, decentralization, and scalability",
        content: `## The Challenge

You can only optimize 2 out of 3:

\`\`\`
        Security
        /      \\
       /        \\
      /          \\
Decentralization ─── Scalability
\`\`\`

| Chain    | Decentralization | Security | Scalability |
|----------|:---:|:---:|:---:|
| Bitcoin  | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐☆☆☆☆ |
| Ethereum | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ | ⭐⭐☆☆☆ |
| BSC      | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐⭐ |
| Solana   | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐⭐ |

## Ethereum's Solution: Layer 2

Instead of compromising, Ethereum uses **Layer 2 networks** to handle scalability while L1 handles security and decentralization.

This is called the **rollup-centric roadmap**.`
      },
      {
        id: "ethereum-journey",
        title: "Ethereum's Journey & The Merge",
        description: "Key milestones in Ethereum history",
        content: `## Ethereum's Mission

An open internet where users control their data, applications run without gatekeepers, and value flows freely.

## Key Milestones

### 🚀 Launch (2015)
Ethereum mainnet goes live with smart contract capability.

### 💵 DAI: Pioneer Stablecoin (Dec 2017)
- First decentralized stablecoin
- Dollar peg maintained through crypto collateral
- DAO governance, no single point of failure

### 🐱 CryptoKitties & NFTs (Nov 2017)
- First major NFT game
- Demonstrated blockchain beyond finance
- Proved digital collectibility

### 🌾 DeFi Summer (June 2020)
- Explosive DeFi growth
- Lending, trading, yield generation
- Open, composable financial infrastructure
- Platforms: Uniswap, Aave, Compound

### 🔀 The Merge (Sep 15, 2022)
- Transition from Proof of Work to Proof of Stake
- **99.95% reduction** in energy consumption
- Strengthened network security
- Foundation for future scalability upgrades`
      }
    ],
    challenge: {
      title: "Blockchain Fundamentals Quiz",
      description: "Write a Solidity comment block that correctly explains the 3 properties of blockchain and the difference between PoW and PoS.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// CHALLENGE: Complete the comments below with the correct information

contract BlockchainQuiz {
    // Q1: What are the 3 core properties of blockchain?
    // Property 1: ___________
    // Property 2: ___________
    // Property 3: ___________

    // Q2: Complete the comparison
    // PoW uses ___________ to validate
    // PoS uses ___________ to validate

    string public answer = "I understand blockchain fundamentals!";
}`,
      expectedPatterns: [
        "transparent|transparency",
        "secure|security",
        "immutable|immutability",
        "computational power|mining|energy|computation",
        "stake|staking|locked tokens|locked cryptocurrency"
      ],
      hints: [
        "Hint 1: Think about the 3 properties: Can everyone see the data? Is it protected by cryptography? Can records be changed once written?",
        "Hint 2: PoW requires miners to solve puzzles using computational power. PoS requires validators to lock up tokens as collateral."
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BlockchainQuiz {
    // Q1: What are the 3 core properties of blockchain?
    // Property 1: Transparent - all transactions visible to participants
    // Property 2: Secure - protected by cryptography and digital signatures
    // Property 3: Immutable - records cannot be changed once written

    // Q2: Complete the comparison
    // PoW uses computational power (mining) to validate blocks
    // PoS uses staking (locked cryptocurrency) to validate blocks

    string public answer = "I understand blockchain fundamentals!";
}`
    }
  },
  {
    id: "wallets-crypto-l2",
    number: 2,
    title: "Wallets, Cryptography & Layer 2",
    subtitle: "Keys, Signatures & Scaling",
    description: "Master wallet concepts — private/public keys, seed phrases, account types, Layer 2 scaling solutions, and the gas system.",
    icon: "🔐",
    color: "#3B82F6",
    lessons: [
      {
        id: "keys-and-addresses",
        title: "Private Keys, Public Keys & Addresses",
        description: "How cryptographic identity works in Ethereum",
        content: `## The Key Generation Process

\`\`\`
Step 1: Generate Private Key (Random 256-bit number)
  0xf8f8a2f43c8376ccb0871305060d7b27b0554d2cc72...
  ⚠️ NEVER SHARE — This is like your password!
          │
          │ ECDSA (Elliptic Curve)
          ▼
Step 2: Derive Public Key
  0x04a598a8030da6d86c6bc7f2f5144544beb2dd0d4e...
  ✅ Safe to share publicly
          │
          │ Keccak-256 Hash
          ▼
Step 3: Create Address
  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb4
  ✅ This is what you share to receive funds
\`\`\`

**One-way function:**
\`\`\`
Private Key → Public Key → Address   ✅ Forward is easy
Address → Public Key → Private Key   ❌ Reverse is impossible
\`\`\`

## Real-World Analogy: Mailbox System

- 🏠 Your House = Blockchain
- 📬 Mailbox = Your Account/Address (0x123...)
- 🔑 Mailbox Key = Your Private Key
- 📮 Mailbox Number = Your Public Address

Anyone can see the mailbox (address) and send mail to it, but only you with the key (private key) can open it and take what's inside.`
      },
      {
        id: "seed-phrases",
        title: "Seed Phrases & HD Wallets",
        description: "Your master backup for all accounts",
        content: `## What is a Seed Phrase?

A seed phrase is **12 or 24 random words** that serve as a master backup for all your crypto accounts.

\`\`\`
Example: witch collapse practice feed shame open despair creek road again ice least
\`\`\`

## How it Works (BIP-39/44)

\`\`\`
Seed Phrase (12-24 words)
    │
    ├──▶ Account 1: 0x742d35Cc...
    ├──▶ Account 2: 0x8f3b2e1d...
    ├──▶ Account 3: 0xa2c4f7b9...
    └──▶ ... (millions more possible)
\`\`\`

## Security Rules

- ❌ **NEVER** share your seed phrase with anyone
- ❌ **NEVER** store it digitally (no screenshots, no cloud)
- ✅ Write it on paper
- ✅ Store in a safe place
- ✅ Consider a metal backup (fireproof)`
      },
      {
        id: "wallet-types",
        title: "Wallet Types & Account Types",
        description: "Hot vs Cold, Custodial vs Non-Custodial, EOA vs Contract",
        content: `## Hot Wallets (Software) 🔥

**Browser Extensions:** MetaMask, Rabby
- ✅ Convenient, easy dApp interaction
- ❌ Vulnerable if computer compromised

**Mobile Wallets:** Trust Wallet, Argent
- ✅ Portable, biometric authentication
- ❌ Risk of phone loss

## Cold Wallets (Hardware) ❄️

**Hardware Wallets:** Ledger, Trezor
- ✅ Keys never touch the internet
- ✅ Physical confirmation required
- ❌ Costs money, less convenient

## Custodial vs Non-Custodial

| Feature | Non-Custodial | Custodial |
|---------|:---:|:---:|
| Key control | You | Company |
| Ownership | True | Delegated |
| Account freeze | Impossible | Possible |
| Recovery | Your responsibility | Password reset |

> **"Not your keys, not your crypto"**

## Ethereum Account Types

### EOA (Externally Owned Account)
- Controlled by private key
- Can initiate transactions
- Your MetaMask account
- No code

### Contract Account
- Controlled by code (smart contract)
- Cannot initiate transactions on its own
- Has executable code + persistent storage
- Examples: Uniswap, USDC token`
      },
      {
        id: "layer-2-scaling",
        title: "Layer 2 & Optimistic Rollups",
        description: "Scaling Ethereum with L2 networks",
        content: `## Why Layer 2?

Ethereum L1 can only handle ~15 transactions per second. Layer 2 networks solve this by processing transactions **off-chain** while settling on L1 for security.

## How Optimistic Rollups Work

\`\`\`
┌─────────────────────────────┐
│   Optimistic Rollup (L2)    │
│                             │
│  1. Execute transactions    │
│  2. Batch them together     │
│  3. Submit batch to L1      │
│  4. Assume valid (optimistic)│
│  5. 7-day challenge period  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      Ethereum (L1)          │
│   Security & Settlement     │
└─────────────────────────────┘
\`\`\`

## Benefits
1. **Scalability**: Thousands of TPS vs ~15 TPS on L1
2. **Lower costs**: Fraction of L1 fees
3. **Ethereum security**: Settled on Ethereum
4. **EVM compatible**: Same tools, code, and wallets`
      },
      {
        id: "gas-system",
        title: "The Gas System & Transactions",
        description: "Understanding fees on Ethereum",
        content: `## What is Gas?

Gas is a unit that measures the **computational work** required to execute operations on Ethereum.

## Restaurant Analogy

| Restaurant | Ethereum |
|-----------|----------|
| Menu items | Operations |
| Price per item | Gas Price (Gwei) |
| Number of items | Gas Limit |
| Total bill | Transaction Fee |
| Tip | Priority Fee |

## Gas Costs by Operation

| Operation | Gas Cost |
|-----------|---------|
| Send ETH | 21,000 |
| ERC-20 transfer | ~65,000 |
| Uniswap swap | ~150,000 |
| Deploy contract | ~200,000+ |
| Mint NFT | ~80,000 |

## Fee Calculation

\`\`\`
Transaction Fee = Gas Used × Gas Price

Example:
  Gas Used:  21,000
  Gas Price: 50 Gwei
  Fee = 21,000 × 50 = 1,050,000 Gwei = 0.00105 ETH
  If ETH = $2,000 → Fee = $2.10
\`\`\`

## Ethereum Units

| Unit | Wei Value | Common Use |
|------|----------|------------|
| Wei | 1 | Smart contracts |
| Gwei | 10⁹ | Gas prices |
| ETH | 10¹⁸ | Balances |`
      }
    ],
    challenge: {
      title: "Wallet Concepts Contract",
      description: "Write a smart contract that stores wallet-related information and demonstrates understanding of addresses and msg.sender.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WalletDemo {
    // TODO 1: Create a public address variable called "owner"

    // TODO 2: Create a public uint256 variable called "createdAt"

    // TODO 3: Write a constructor that sets:
    //   - owner to the deployer's address (use msg.sender)
    //   - createdAt to the current block timestamp

    // TODO 4: Write a function "isOwner" that:
    //   - takes no parameters
    //   - is public and view
    //   - returns bool
    //   - returns true if msg.sender equals owner
}`,
      expectedPatterns: [
        "address\\s+public\\s+owner",
        "uint256\\s+public\\s+createdAt",
        "constructor\\s*\\(",
        "owner\\s*=\\s*msg\\.sender",
        "createdAt\\s*=\\s*block\\.timestamp",
        "function\\s+isOwner\\s*\\(",
        "returns?\\s*\\(\\s*bool\\s*\\)",
        "msg\\.sender\\s*==\\s*owner"
      ],
      hints: [
        "Hint 1: Declare state variables like: address public owner; and uint256 public createdAt;",
        "Hint 2: In the constructor, use msg.sender for the deployer's address and block.timestamp for the current time. The isOwner function should return msg.sender == owner"
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WalletDemo {
    address public owner;
    uint256 public createdAt;

    constructor() {
        owner = msg.sender;
        createdAt = block.timestamp;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
}`
    }
  },
  {
    id: "solidity-101",
    number: 3,
    title: "Solidity 101 — Basic Data Types",
    subtitle: "Your First Smart Contract",
    description: "Learn Solidity from scratch — strings, numbers, booleans, addresses, and global variables. Write your first smart contract!",
    icon: "📝",
    color: "#06B6D4",
    lessons: [
      {
        id: "setup-remix",
        title: "Setting Up Remix IDE & MetaMask",
        description: "Your development environment for Solidity",
        content: `## Remix IDE

Remix is an **online IDE** for writing and deploying smart contracts.

1. Open [https://remix.ethereum.org](https://remix.ethereum.org)
2. Key areas:
   - **Left**: File Explorer — where your contract files live
   - **Center**: Editor — where you write code
   - **Bottom**: Terminal — where you see results
   - **Right**: Compiler and Deploy panels

## MetaMask Setup

MetaMask is a **digital wallet** for interacting with blockchain.

1. Download from [metamask.io](https://metamask.io)
2. Create a new wallet (save your seed phrase securely!)

## Connect to Sepolia Testnet

1. Add Sepolia to MetaMask via [Chainlist](https://chainlist.org/?chain=11155111&search=sepolia&testnets=true)
2. Get free test ETH from [Google Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)

## Connect Remix to MetaMask

1. In Remix, click "Deploy & Run Transactions"
2. Under Environment, select "Injected Provider - MetaMask"
3. Make sure MetaMask is on Sepolia Test Network

You're now ready to write Solidity! 🎉`
      },
      {
        id: "string-type",
        title: "String — Storing Text",
        description: "Your first Solidity data type",
        content: `## What is it?
Stores text like "Budi Santoso" or "Computer Science"

## Code Example

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnString {
    // String variable to store student name
    string public studentName;

    // Constructor sets initial value
    constructor() {
        studentName = "Budi Santoso";
    }

    // Function to change the name
    function changeName(string memory _newName) public {
        studentName = _newName;
    }
}
\`\`\`

## Key Concepts
- \`string public studentName\` — creates a readable string variable
- \`constructor()\` — runs once when the contract is deployed
- \`string memory _newName\` — temporary parameter (stored in memory)
- \`memory\` keyword — data is temporary, not stored permanently

## Try It
1. Deploy → Click \`studentName\` → See "Budi Santoso"
2. Type "Ani Wijaya" → Click \`changeName\`
3. Click \`studentName\` → Now shows "Ani Wijaya"!`
      },
      {
        id: "uint-type",
        title: "uint256 — Positive Integers",
        description: "Working with numbers in Solidity",
        content: `## What is it?
Stores positive whole numbers from 0 to an astronomically large number (2²⁵⁶ - 1).

## Code Example

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnNumber {
    uint256 public studentId;
    uint256 public credits;

    constructor() {
        studentId = 2101001;
        credits = 0;
    }

    function changeStudentId(uint256 _newId) public {
        studentId = _newId;
    }

    function addCredits() public {
        credits = credits + 3;
        // Can also write: credits += 3;
    }
}
\`\`\`

## Key Concepts
- \`uint256\` — unsigned integer, 256-bit (0 to 2²⁵⁶-1)
- No negative numbers! Use \`int256\` for signed integers
- \`credits += 3\` — shorthand for \`credits = credits + 3\`

## Try It
1. Deploy → Click \`credits\` → See 0
2. Click \`addCredits\` 4 times
3. Click \`credits\` → Now shows 12 (4 × 3)!`
      },
      {
        id: "bool-address",
        title: "Boolean & Address Types",
        description: "True/false values and wallet addresses",
        content: `## Boolean — True or False

Only two values: \`true\` or \`false\`. Used for status flags.

\`\`\`solidity
contract LearnBoolean {
    bool public isActive;
    bool public hasGraduated;

    constructor() {
        isActive = true;
        hasGraduated = false;
    }

    function graduate() public {
        hasGraduated = true;
    }
}
\`\`\`

## Address — Wallet Addresses

Stores Ethereum wallet addresses (20 bytes, like 0x742d35Cc...).

\`\`\`solidity
contract LearnAddress {
    address public admin;
    address public student;

    constructor() {
        admin = msg.sender;  // msg.sender = your wallet address
    }

    function setStudent(address _student) public {
        student = _student;
    }
}
\`\`\`

## Key Concepts
- \`bool\` — only \`true\` or \`false\`
- \`address\` — stores wallet address (0x742d35Cc...)
- \`msg.sender\` — the address calling the function
- Used for ownership, payments, access control`
      },
      {
        id: "global-variables",
        title: "Global Variables in Solidity",
        description: "Built-in variables: msg.sender, block.timestamp, and more",
        content: `## What are Global Variables?

Special variables provided by Solidity that give you information about the transaction and blockchain state.

## Most Important Global Variables

### Block Properties
| Variable | Type | Description |
|----------|------|-------------|
| \`block.timestamp\` | uint256 | Current block time (Unix) |
| \`block.number\` | uint256 | Current block number |
| \`block.chainid\` | uint256 | Chain ID (Sepolia=11155111) |

### Transaction Properties (msg)
| Variable | Type | Description |
|----------|------|-------------|
| \`msg.sender\` | address | Address calling the function |
| \`msg.value\` | uint256 | ETH sent with the call (wei) |

### Contract Properties
| Variable | Type | Description |
|----------|------|-------------|
| \`address(this)\` | address | This contract's address |
| \`address(this).balance\` | uint256 | Contract's ETH balance |

## msg.sender vs tx.origin

\`\`\`
User (EOA) → ContractA → ContractB

In ContractB:
  msg.sender = ContractA address
  tx.origin  = User address (EOA)
\`\`\`

> ⚠️ **NEVER** use \`tx.origin\` for authentication — vulnerable to phishing attacks. Always use \`msg.sender\`.`
      }
    ],
    challenge: {
      title: "Build StudentData Contract",
      description: "Combine all basic data types into one contract. Create a StudentData contract with string, uint256, bool, address variables, a constructor, and two functions.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentData {
    // TODO 1: Declare 6 state variables (all public):
    //   - studentName (string)
    //   - studentId (uint256)
    //   - isActive (bool)
    //   - wallet (address)
    //   - registeredTime (uint256)
    //   - credits (uint256)

    // TODO 2: Write a constructor that sets:
    //   - studentName = "Budi Santoso"
    //   - studentId = 2101001
    //   - isActive = true
    //   - wallet = msg.sender
    //   - registeredTime = block.timestamp
    //   - credits = 0

    // TODO 3: Write updateCredits() function
    //   - public, adds 3 to credits

    // TODO 4: Write getAge() function
    //   - public view, returns uint256
    //   - returns block.timestamp - registeredTime
}`,
      expectedPatterns: [
        "string\\s+public\\s+studentName",
        "uint256\\s+public\\s+studentId",
        "bool\\s+public\\s+isActive",
        "address\\s+public\\s+wallet",
        "uint256\\s+public\\s+registeredTime",
        "uint256\\s+public\\s+credits",
        "constructor\\s*\\(",
        "function\\s+updateCredits\\s*\\(",
        "credits\\s*\\+=\\s*3|credits\\s*=\\s*credits\\s*\\+\\s*3",
        "function\\s+getAge\\s*\\(",
        "block\\.timestamp\\s*-\\s*registeredTime"
      ],
      hints: [
        "Hint 1: Declare each variable on its own line like: string public studentName; Then set them all in the constructor.",
        "Hint 2: updateCredits should simply do credits += 3; and getAge should return block.timestamp - registeredTime;"
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentData {
    string public studentName;
    uint256 public studentId;
    bool public isActive;
    address public wallet;
    uint256 public registeredTime;
    uint256 public credits;

    constructor() {
        studentName = "Budi Santoso";
        studentId = 2101001;
        isActive = true;
        wallet = msg.sender;
        registeredTime = block.timestamp;
        credits = 0;
    }

    function updateCredits() public {
        credits += 3;
    }

    function getAge() public view returns (uint256) {
        return block.timestamp - registeredTime;
    }
}`
    }
  },
  {
    id: "solidity-102",
    number: 4,
    title: "Solidity 102 — Struct, Enum & Data Structures",
    subtitle: "Organizing Complex Data",
    description: "Learn how to structure data with Enums, Structs, Mappings, and Arrays — the building blocks of real-world smart contracts.",
    icon: "🏗️",
    color: "#EC4899",
    lessons: [
      {
        id: "enums",
        title: "Enum — Named Constants",
        description: "Predefined status values for cleaner code",
        content: `## What is an Enum?

A data type with **predefined values**. Makes code more readable and prevents invalid values.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnEnum {
    enum StudentStatus {
        NotRegistered,  // 0
        Active,         // 1
        OnLeave,        // 2
        Graduated,      // 3
        Dropped         // 4
    }

    StudentStatus public currentStatus;

    constructor() {
        currentStatus = StudentStatus.NotRegistered;
    }

    function register() public {
        currentStatus = StudentStatus.Active;
    }

    function graduate() public {
        if (currentStatus == StudentStatus.Active) {
            currentStatus = StudentStatus.Graduated;
        }
    }
}
\`\`\`

## Key Points
- Enum values are internally stored as \`uint8\` (0, 1, 2, ...)
- Much safer than using raw numbers
- Compiler prevents invalid values`
      },
      {
        id: "structs",
        title: "Struct — Custom Data Types",
        description: "Group related variables together",
        content: `## What is a Struct?

A way to **group multiple variables** into one custom type — like creating a template.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnStruct {
    enum StudentStatus { NotRegistered, Active, OnLeave, Graduated }

    struct Student {
        uint256 id;
        string name;
        address wallet;
        StudentStatus status;
        uint8 credits;
        bool isActive;
    }

    Student public myStudent;

    constructor() {
        myStudent = Student({
            id: 2101001,
            name: "Budi Santoso",
            wallet: msg.sender,
            status: StudentStatus.Active,
            credits: 0,
            isActive: true
        });
    }

    function addCredits() public {
        myStudent.credits += 3;
    }
}
\`\`\`

## Key Points
- \`struct Student { ... }\` — creates a new composite type
- Access fields with dot notation: \`myStudent.credits\`
- Can use structs with mappings and arrays for powerful data management`
      },
      {
        id: "mappings",
        title: "Mapping — Key-Value Storage",
        description: "Like a dictionary: map keys to values",
        content: `## What is a Mapping?

Like a dictionary — maps a **key** to a **value**. Lookups are instant (O(1)).

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnMapping {
    // studentId => name
    mapping(uint256 => string) public studentName;
    // studentId => credits
    mapping(uint256 => uint256) public studentCredits;

    function addStudent(uint256 _id, string memory _name) public {
        studentName[_id] = _name;
        studentCredits[_id] = 0;
    }

    function addCredits(uint256 _id, uint256 _amount) public {
        studentCredits[_id] += _amount;
    }
}
\`\`\`

## Key Points
- \`mapping(KeyType => ValueType)\` — declares the mapping
- \`studentName[_id] = _name\` — set value for key
- \`public\` on mapping auto-creates a getter function
- Default value: returns zero/empty for non-existent keys
- **Cannot iterate** over mappings (use arrays alongside)`
      },
      {
        id: "arrays",
        title: "Arrays — Ordered Lists",
        description: "Dynamic lists of items",
        content: `## What is an Array?

An **ordered list** that can grow dynamically.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnArray {
    uint256[] public allStudentIds;

    function addStudent(uint256 _id) public {
        allStudentIds.push(_id);
    }

    function getTotalStudents() public view returns (uint256) {
        return allStudentIds.length;
    }

    function getAllStudents() public view returns (uint256[] memory) {
        return allStudentIds;
    }
}
\`\`\`

## Key Points
- \`uint256[]\` — dynamic array (can grow)
- \`.push(_id)\` — add element to end
- \`.length\` — get number of elements
- \`allStudentIds[0]\` — access first element (0-indexed!)
- \`returns (uint256[] memory)\` — return entire array`
      }
    ],
    challenge: {
      title: "Build MultipleStudents Contract",
      description: "Create a contract that manages multiple students using mapping + struct + enum. Include addStudent, addCredits, and getStudent functions.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MultipleStudents {
    // TODO 1: Create an enum StudentStatus with values:
    //   NotRegistered, Active, OnLeave, Graduated

    // TODO 2: Create a struct Student with fields:
    //   id (uint256), name (string), wallet (address),
    //   status (StudentStatus), credits (uint8), exists (bool)

    // TODO 3: Create a mapping from uint256 to Student called "students"

    // TODO 4: Create a public uint256 counter called "studentCounter"

    // TODO 5: Write addStudent(string memory _name) that:
    //   - increments counter
    //   - creates Student in mapping
    //   - returns the new ID

    // TODO 6: Write getStudent(uint256 _id) that:
    //   - returns the Student struct
}`,
      expectedPatterns: [
        "enum\\s+StudentStatus",
        "Active",
        "struct\\s+Student",
        "mapping\\s*\\(\\s*uint256\\s*=>\\s*Student\\s*\\)",
        "uint256\\s+public\\s+studentCounter",
        "function\\s+addStudent",
        "studentCounter\\+\\+|studentCounter\\s*\\+=\\s*1",
        "function\\s+getStudent"
      ],
      hints: [
        "Hint 1: Define the enum first, then the struct that uses it, then the mapping. Remember: enum values are comma-separated.",
        "Hint 2: In addStudent, increment studentCounter first, then assign students[studentCounter] = Student({...}). Use msg.sender for wallet."
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MultipleStudents {
    enum StudentStatus { NotRegistered, Active, OnLeave, Graduated }

    struct Student {
        uint256 id;
        string name;
        address wallet;
        StudentStatus status;
        uint8 credits;
        bool exists;
    }

    mapping(uint256 => Student) public students;
    uint256 public studentCounter;

    function addStudent(string memory _name) public returns (uint256) {
        studentCounter++;
        students[studentCounter] = Student({
            id: studentCounter,
            name: _name,
            wallet: msg.sender,
            status: StudentStatus.Active,
            credits: 0,
            exists: true
        });
        return studentCounter;
    }

    function getStudent(uint256 _id) public view returns (Student memory) {
        return students[_id];
    }
}`
    }
  },
  {
    id: "solidity-103",
    number: 5,
    title: "Solidity 103 — Security & Events",
    subtitle: "Access Control & Logging",
    description: "Add security with require statements and modifiers, and learn to emit events for frontend communication.",
    icon: "🛡️",
    color: "#10B981",
    lessons: [
      {
        id: "require-validation",
        title: "require() — Input Validation",
        description: "Guard functions with condition checks",
        content: `## What is require()?

A **security guard** that checks conditions before executing code. If the condition is false, the transaction reverts.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnRequire {
    mapping(uint256 => address) public studentOwner;
    mapping(uint256 => uint256) public studentCredits;

    function registerStudent(uint256 _id) public {
        studentOwner[_id] = msg.sender;
        studentCredits[_id] = 0;
    }

    function addCredits(uint256 _id, uint256 _amount) public {
        require(studentOwner[_id] == msg.sender, "Not your student!");
        require(_amount > 0, "Amount must be greater than 0");
        studentCredits[_id] += _amount;
    }
}
\`\`\`

## How it Works
- \`require(condition, "error")\` — checks if condition is true
- If FALSE → transaction fails, shows error message, gas is refunded
- If TRUE → code continues to next line`
      },
      {
        id: "modifiers",
        title: "Modifiers — Reusable Checks",
        description: "DRY principle for access control",
        content: `## What is a Modifier?

A **reusable validation wrapper** for functions. Write the check once, apply it to many functions.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnModifier {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    // Define modifier
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin!");
        _;  // placeholder: function body runs here
    }

    // Apply modifier
    function adminFunction() public onlyAdmin {
        // Only admin can execute this
    }

    function changeAdmin(address _new) public onlyAdmin {
        admin = _new;
    }
}
\`\`\`

## Key Points
- \`modifier onlyAdmin() { ... }\` — defines the check
- \`_;\` — placeholder where the function body executes
- \`public onlyAdmin\` — applies the modifier
- Modifier runs BEFORE the function body
- Can have multiple modifiers on one function`
      },
      {
        id: "events",
        title: "Events — On-Chain Logging",
        description: "Broadcast logs for frontend listening",
        content: `## What are Events?

**Broadcast logs** about what happened in a contract. Stored on blockchain, readable by frontends.

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LearnEvents {
    event StudentRegistered(
        address indexed owner,
        uint256 indexed studentId,
        string name
    );

    event CreditsAdded(
        uint256 indexed studentId,
        uint256 credits,
        uint256 totalCredits
    );

    mapping(uint256 => string) public studentName;
    uint256 public studentCounter;

    function registerStudent(string memory _name) public {
        studentCounter++;
        studentName[studentCounter] = _name;

        // Emit the event
        emit StudentRegistered(msg.sender, studentCounter, _name);
    }
}
\`\`\`

## Key Points
- \`event StudentRegistered(...)\` — declares the event
- \`indexed\` — makes parameter searchable (max 3 per event)
- \`emit StudentRegistered(...)\` — triggers the event
- Events are stored on blockchain but cheap to emit
- Frontend can listen for events in real-time`
      }
    ],
    challenge: {
      title: "Secure Student Registry",
      description: "Build a contract with an onlyAdmin modifier, require validations, and events for student registration.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SecureRegistry {
    // TODO 1: State variables
    //   - address public admin
    //   - mapping(uint256 => string) public students
    //   - uint256 public count

    // TODO 2: Event StudentAdded(address indexed by, uint256 indexed id, string name)

    // TODO 3: modifier onlyAdmin that checks msg.sender == admin

    // TODO 4: constructor that sets admin = msg.sender

    // TODO 5: function addStudent(string memory _name) public onlyAdmin
    //   - increments count
    //   - stores student name
    //   - emits StudentAdded event
}`,
      expectedPatterns: [
        "address\\s+public\\s+admin",
        "mapping\\s*\\(",
        "event\\s+StudentAdded",
        "modifier\\s+onlyAdmin",
        "require\\s*\\(\\s*msg\\.sender\\s*==\\s*admin",
        "_\\s*;",
        "constructor\\s*\\(",
        "function\\s+addStudent.*onlyAdmin",
        "emit\\s+StudentAdded"
      ],
      hints: [
        "Hint 1: The modifier should contain require(msg.sender == admin, \"Only admin!\"); followed by _; on the next line.",
        "Hint 2: In addStudent, increment count, store students[count] = _name, and emit StudentAdded(msg.sender, count, _name);"
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SecureRegistry {
    address public admin;
    mapping(uint256 => string) public students;
    uint256 public count;

    event StudentAdded(address indexed by, uint256 indexed id, string name);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin!");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addStudent(string memory _name) public onlyAdmin {
        count++;
        students[count] = _name;
        emit StudentAdded(msg.sender, count, _name);
    }
}`
    }
  },
  {
    id: "hardhat-setup",
    number: 6,
    title: "Development Tools — Hardhat 3",
    subtitle: "Professional Smart Contract Development",
    description: "Move beyond Remix — set up Hardhat 3 for professional development with testing, deployment scripts, and more.",
    icon: "⚒️",
    color: "#F59E0B",
    lessons: [
      {
        id: "why-hardhat",
        title: "Why Hardhat?",
        description: "Moving from Remix to professional tools",
        content: `## Remix vs Hardhat

| Feature | Remix | Hardhat |
|---------|:-----:|:-------:|
| Environment | Browser | Local |
| Version Control | ❌ | ✅ Git |
| Testing | Basic | Full Framework |
| Automation | Manual | Scripts |
| Team Collaboration | Difficult | Easy |
| CI/CD | ❌ | ✅ |
| Debugging | Basic | Advanced |

## When to Use What?

- **Remix**: Learning, quick prototyping, small contracts
- **Hardhat**: Production projects, team development, complex dApps

## Hardhat 3 Features
- Built-in Solidity compiler
- Local blockchain for testing
- Console.log in Solidity (debugging)
- Flexible plugin system
- TypeScript native support
- Gas reporting`
      },
      {
        id: "hardhat-installation",
        title: "Installing & Setting Up Hardhat 3",
        description: "Step-by-step project setup",
        content: `## Prerequisites

- Node.js v18+ installed
- npm or yarn package manager
- A code editor (VS Code recommended)

## Setup Steps

\`\`\`bash
# 1. Create project directory
mkdir my-hardhat-project
cd my-hardhat-project

# 2. Initialize npm project
npm init -y

# 3. Install Hardhat 3
npm install --save-dev hardhat

# 4. Initialize Hardhat project
npx hardhat init
# Select: "Create a TypeScript project"

# 5. Install additional dependencies
npm install --save-dev @nomicfoundation/hardhat-toolbox
\`\`\`

## Project Structure

\`\`\`
my-hardhat-project/
├── contracts/       ← Your Solidity files
├── test/           ← Test files
├── scripts/        ← Deployment scripts
├── hardhat.config.ts  ← Configuration
└── package.json
\`\`\``
      },
      {
        id: "hardhat-testing",
        title: "Writing Tests & Deployment",
        description: "Test your contracts before deploying",
        content: `## Writing a Test

\`\`\`typescript
import { expect } from "chai";
import { ethers } from "hardhat";

describe("StudentData", function () {
    it("should deploy with correct name", async function () {
        const StudentData = await ethers.getContractFactory("StudentData");
        const student = await StudentData.deploy();

        expect(await student.studentName()).to.equal("Budi Santoso");
    });

    it("should update credits", async function () {
        const StudentData = await ethers.getContractFactory("StudentData");
        const student = await StudentData.deploy();

        await student.updateCredits();
        expect(await student.credits()).to.equal(3);
    });
});
\`\`\`

## Running Tests

\`\`\`bash
npx hardhat test
\`\`\`

## Deployment Script

\`\`\`typescript
import { ethers } from "hardhat";

async function main() {
    const StudentData = await ethers.getContractFactory("StudentData");
    const student = await StudentData.deploy();
    await student.waitForDeployment();
    console.log("Deployed to:", await student.getAddress());
}

main().catch(console.error);
\`\`\`

## Deploy to Testnet

\`\`\`bash
npx hardhat run scripts/deploy.ts --network sepolia
\`\`\``
      }
    ],
    challenge: {
      title: "Hardhat Config Challenge",
      description: "Write a basic Hardhat configuration file that configures the Solidity compiler version and adds a Sepolia network.",
      starterCode: `// hardhat.config.ts
// This is a TypeScript configuration for Hardhat

// TODO 1: Import HardhatUserConfig type
// import { HardhatUserConfig } from "hardhat/config";

// TODO 2: Create a config object with:
//   - solidity compiler version "0.8.20"
//   - networks.sepolia with:
//     - url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY"
//     - accounts: ["0xYOUR_PRIVATE_KEY"]

// TODO 3: Export the config as default

const config = {
    // Write your config here
};

export default config;`,
      expectedPatterns: [
        "solidity",
        "0\\.8\\.20|0\\.8\\.",
        "networks",
        "sepolia",
        "url",
        "accounts",
        "export\\s+default"
      ],
      hints: [
        "Hint 1: The config object has two main keys: solidity (string) and networks (object with sepolia key).",
        "Hint 2: config = { solidity: \"0.8.20\", networks: { sepolia: { url: \"...\", accounts: [\"...\"] } } }"
      ],
      solution: `// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.20",
    networks: {
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY",
            accounts: ["0xYOUR_PRIVATE_KEY"]
        }
    }
};

export default config;`
    }
  },
  {
    id: "token-standards",
    number: 7,
    title: "Token Standards — ERC-20 & ERC-721",
    subtitle: "Creating Fungible & Non-Fungible Tokens",
    description: "Learn the two most important token standards in Ethereum — ERC-20 for fungible tokens and ERC-721 for NFTs.",
    icon: "🪙",
    color: "#8B5CF6",
    lessons: [
      {
        id: "what-are-tokens",
        title: "What are Token Standards?",
        description: "Why standards matter in blockchain",
        content: `## Token Standards

A **token standard** is a set of rules (interface) that a smart contract must follow. This ensures all tokens work seamlessly with wallets, exchanges, and other contracts.

## ERC = Ethereum Request for Comments

| Standard | Type | Use Case |
|----------|------|----------|
| ERC-20 | Fungible Token | Currencies, utility tokens |
| ERC-721 | Non-Fungible Token | NFTs, unique assets |
| ERC-1155 | Multi Token | Gaming items, mixed assets |

## Fungible vs Non-Fungible

**Fungible (ERC-20):**
- Every token is identical and interchangeable
- 1 USDC = 1 USDC, always
- Like dollar bills — each $1 is the same

**Non-Fungible (ERC-721):**
- Every token is unique with a unique ID
- Each NFT has different properties
- Like art pieces — each is one-of-a-kind`
      },
      {
        id: "erc20-token",
        title: "ERC-20: Fungible Tokens",
        description: "Creating your own cryptocurrency",
        content: `## ERC-20 Interface

Every ERC-20 token must implement these functions:

\`\`\`solidity
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}
\`\`\`

## Simple ERC-20 Implementation

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("My Token", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
\`\`\`

## Key Concepts
- \`totalSupply\` — total tokens in existence
- \`balanceOf\` — how many tokens an address holds
- \`transfer\` — send tokens directly
- \`approve\` + \`transferFrom\` — allow another contract to spend your tokens (DeFi pattern)`
      },
      {
        id: "erc721-nft",
        title: "ERC-721: Non-Fungible Tokens",
        description: "Creating unique digital assets",
        content: `## ERC-721 Core Concept

Each token has a **unique tokenId**. No two tokens are alike.

## Simple NFT Implementation

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 private _tokenIdCounter;

    constructor() ERC721("My NFT Collection", "MNFT") {}

    function mint(address to) public {
        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
    }
}
\`\`\`

## Key Functions
- \`ownerOf(tokenId)\` — who owns this specific NFT?
- \`balanceOf(address)\` — how many NFTs does this address own?
- \`transferFrom\` — transfer an NFT
- \`tokenURI(tokenId)\` — metadata URL for this NFT

## OpenZeppelin

[OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) provides battle-tested, audited implementations of all token standards. **Always use OpenZeppelin** instead of writing from scratch.

\`\`\`bash
npm install @openzeppelin/contracts
\`\`\``
      }
    ],
    challenge: {
      title: "Create Your Own ERC-20 Token",
      description: "Write a simple ERC-20 token contract using OpenZeppelin. Name it 'Campus Coin' with symbol 'CAMP' and mint 1,000,000 tokens to the deployer.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// TODO 1: Import ERC20 from OpenZeppelin
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// TODO 2: Create contract CampusCoin that inherits from ERC20

// TODO 3: Constructor should:
//   - Call ERC20 constructor with name "Campus Coin" and symbol "CAMP"
//   - Mint 1,000,000 tokens (with decimals) to msg.sender

contract CampusCoin {
    // Your code here
}`,
      expectedPatterns: [
        "import.*ERC20",
        "contract\\s+CampusCoin\\s+is\\s+ERC20",
        "ERC20\\s*\\(\\s*\"Campus Coin\"\\s*,\\s*\"CAMP\"\\s*\\)",
        "_mint\\s*\\(",
        "msg\\.sender",
        "1000000|1_000_000"
      ],
      hints: [
        "Hint 1: The contract declaration should be: contract CampusCoin is ERC20 { ... } — 'is' keyword means inheritance.",
        "Hint 2: In the constructor, call the parent: constructor() ERC20(\"Campus Coin\", \"CAMP\") { _mint(msg.sender, 1000000 * 10 ** decimals()); }"
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CampusCoin is ERC20 {
    constructor() ERC20("Campus Coin", "CAMP") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}`
    }
  },
  {
    id: "frontend-integration",
    number: 8,
    title: "Frontend Integration & Account Abstraction",
    subtitle: "Connecting dApps to Smart Contracts",
    description: "Learn how to connect a web frontend to smart contracts using ethers.js/viem, and understand Account Abstraction.",
    icon: "🖥️",
    color: "#06B6D4",
    lessons: [
      {
        id: "ethers-basics",
        title: "ethers.js / viem Basics",
        description: "JavaScript libraries for blockchain interaction",
        content: `## Connecting to Ethereum

Two popular libraries:
- **ethers.js** — battle-tested, widely used
- **viem** — newer, TypeScript-first, used by wagmi

## ethers.js Example

\`\`\`javascript
import { ethers } from "ethers";

// Connect to MetaMask
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

// Get wallet address
const address = await signer.getAddress();
console.log("Connected:", address);

// Get ETH balance
const balance = await provider.getBalance(address);
console.log("Balance:", ethers.formatEther(balance), "ETH");

// Interact with a contract
const contract = new ethers.Contract(
    "0x1234...contractAddress",
    ["function studentName() view returns (string)"],
    provider
);

const name = await contract.studentName();
console.log("Student:", name);
\`\`\`

## viem Example

\`\`\`typescript
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const client = createPublicClient({
    chain: sepolia,
    transport: http()
});

const balance = await client.getBalance({
    address: "0x1234..."
});
\`\`\``
      },
      {
        id: "frontend-dapp",
        title: "Building a Simple dApp Frontend",
        description: "React + smart contract interaction",
        content: `## Architecture

\`\`\`
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Frontend   │────▶│  Provider    │────▶│  Blockchain  │
│   (React)    │     │  (MetaMask)  │     │  (Ethereum)  │
└──────────────┘     └──────────────┘     └──────────────┘
\`\`\`

## Connecting a React App

\`\`\`jsx
import { useState, useEffect } from "react";
import { ethers } from "ethers";

function App() {
    const [account, setAccount] = useState("");
    const [studentName, setStudentName] = useState("");

    async function connectWallet() {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setAccount(await signer.getAddress());
    }

    async function readContract() {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            ABI,
            provider
        );
        const name = await contract.studentName();
        setStudentName(name);
    }

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <p>Account: {account}</p>
            <button onClick={readContract}>Read Student Name</button>
            <p>Name: {studentName}</p>
        </div>
    );
}
\`\`\``
      },
      {
        id: "account-abstraction",
        title: "Account Abstraction Overview",
        description: "The future of Ethereum accounts (ERC-4337)",
        content: `## What is Account Abstraction?

Account Abstraction (ERC-4337) turns **wallets into smart contracts**, enabling features impossible with regular EOA wallets.

## Current Problem

- Users must hold ETH for gas fees
- One private key = one point of failure
- No way to recover lost keys
- Complex UX for newcomers

## What AA Enables

| Feature | EOA | Smart Account |
|---------|:---:|:---:|
| Gas sponsorship | ❌ | ✅ |
| Social recovery | ❌ | ✅ |
| Batch transactions | ❌ | ✅ |
| Spending limits | ❌ | ✅ |
| Session keys | ❌ | ✅ |
| Multi-signature | ❌ | ✅ |

## How it Works

\`\`\`
User creates UserOperation (not transaction)
    │
    ▼
Bundler collects UserOperations
    │
    ▼
EntryPoint contract validates & executes
    │
    ▼
Paymaster can sponsor gas fees
\`\`\`

## Impact on UX

With Account Abstraction, dApps can:
- Pay gas fees for users (gasless transactions)
- Allow login with email/social (no seed phrases!)
- Automatically recover accounts through trusted contacts
- Set spending limits and require multi-party approval`
      }
    ],
    challenge: {
      title: "Frontend Connection Code",
      description: "Write a Solidity contract with a simple getter and setter that could be connected to a frontend, including proper events.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStore {
    // TODO 1: Create a public string variable "message"

    // TODO 2: Create event MessageChanged(address indexed sender, string newMessage)

    // TODO 3: Constructor sets message to "Hello Web3!"

    // TODO 4: Function setMessage(string memory _msg) that:
    //   - updates message
    //   - emits MessageChanged event

    // TODO 5: Function getMessage() view returns the message
}`,
      expectedPatterns: [
        "string\\s+public\\s+message",
        "event\\s+MessageChanged",
        "constructor\\s*\\(",
        "\"Hello Web3!\"",
        "function\\s+setMessage",
        "emit\\s+MessageChanged",
        "function\\s+getMessage"
      ],
      hints: [
        "Hint 1: Declare string public message; then event MessageChanged(address indexed sender, string newMessage);",
        "Hint 2: setMessage should update message = _msg then emit MessageChanged(msg.sender, _msg). getMessage returns message."
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStore {
    string public message;

    event MessageChanged(address indexed sender, string newMessage);

    constructor() {
        message = "Hello Web3!";
    }

    function setMessage(string memory _msg) public {
        message = _msg;
        emit MessageChanged(msg.sender, _msg);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}`
    }
  },
  {
    id: "defi-amm-indexing",
    number: 9,
    title: "Advanced — DeFi, AMM & Indexing",
    subtitle: "Decentralized Finance in Practice",
    description: "Explore DeFi protocols, understand Automated Market Makers (AMMs), and learn about blockchain indexing with The Graph.",
    icon: "💹",
    color: "#EF4444",
    lessons: [
      {
        id: "defi-overview",
        title: "DeFi Protocols Overview",
        description: "Understanding decentralized finance",
        content: `## What is DeFi?

**Decentralized Finance (DeFi)** is an ecosystem of financial applications built on blockchain, operating without intermediaries.

## Core DeFi Categories

### 🏦 Lending & Borrowing
- **Aave, Compound** — Supply assets, earn interest; borrow against collateral
- Over-collateralized loans (no credit check needed!)

### 💱 Decentralized Exchanges (DEX)
- **Uniswap, SushiSwap** — Swap tokens without a central order book
- Uses Automated Market Makers (AMMs) instead of order matching

### 🌾 Yield Farming
- Provide liquidity to protocols and earn rewards
- Higher risk = higher potential returns

### 💵 Stablecoins
- **DAI** — decentralized, crypto-collateralized
- **USDC** — centralized, fiat-backed
- Maintain $1 peg through different mechanisms

## DeFi vs Traditional Finance

| Aspect | TradFi | DeFi |
|--------|--------|------|
| Access | Bank account needed | Wallet only |
| Hours | Business hours | 24/7/365 |
| KYC | Required | Not required |
| Transparency | Opaque | Fully transparent |
| Composability | Siloed | "Money Legos" |`
      },
      {
        id: "amm-explained",
        title: "AMM — Automated Market Maker",
        description: "How Uniswap and DEXes work under the hood",
        content: `## What is an AMM?

Instead of matching buyers and sellers (order book), AMMs use **liquidity pools** and a mathematical formula to determine prices.

## Constant Product Formula (Uniswap v2)

\`\`\`
x * y = k

x = amount of Token A in pool
y = amount of Token B in pool
k = constant (always maintained)
\`\`\`

## Example

**Pool: 100 ETH × 200,000 USDC**
\`\`\`
k = 100 × 200,000 = 20,000,000

You want to buy 1 ETH:
  New ETH in pool: 99
  New USDC needed: 20,000,000 / 99 = 202,020.20
  Cost: 202,020.20 - 200,000 = 2,020.20 USDC per ETH

Larger trades = more slippage (price impact)
\`\`\`

## Liquidity Providers

- Anyone can **provide liquidity** by depositing equal value of both tokens
- Earn **trading fees** (0.3% of each swap on Uniswap v2)
- Receive **LP tokens** representing your share of the pool
- Risk: **Impermanent Loss** when token prices diverge

## Why AMMs Matter

- No need for order book or market makers
- Anyone can create a trading pair
- Fully permissionless and decentralized
- Foundation of the entire DeFi ecosystem`
      },
      {
        id: "indexing-thegraph",
        title: "Blockchain Indexing & The Graph",
        description: "Querying blockchain data efficiently",
        content: `## The Problem

Blockchain data is stored on-chain but is **hard to query** efficiently. You can't do SQL-like queries on raw blockchain data.

## The Graph Protocol

The Graph is a **decentralized indexing protocol** that makes blockchain data easily queryable using GraphQL.

## How it Works

\`\`\`
Smart Contracts emit Events
        │
        ▼
The Graph Indexer reads Events
        │
        ▼
Creates organized Subgraph database
        │
        ▼
Developers query with GraphQL
\`\`\`

## Example Query

\`\`\`graphql
{
    students(first: 10, orderBy: credits, orderDirection: desc) {
        id
        name
        credits
        wallet
        registeredAt
    }
}
\`\`\`

## Why Indexing Matters

- **Frontend Performance**: Don't scan entire blockchain for data
- **Complex Queries**: Filter, sort, paginate blockchain data
- **Real-time Updates**: Subscribe to new events
- **DeFi Dashboards**: Show pools, TVL, trading volumes
- **Analytics**: User activity, protocol metrics`
      }
    ],
    challenge: {
      title: "Simple AMM Price Calculator",
      description: "Write a smart contract that implements the constant product formula (x * y = k) for a simple price calculator.",
      starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleAMM {
    // TODO 1: State variables
    //   - uint256 public reserveA (initial: 1000)
    //   - uint256 public reserveB (initial: 2000)
    //   - uint256 public k (= reserveA * reserveB)

    // TODO 2: Constructor that initializes reserves and calculates k

    // TODO 3: Function getPrice(uint256 amountA) view returns (uint256)
    //   - Calculate how much tokenB you get for amountA of tokenA
    //   - Using: newReserveA = reserveA + amountA
    //   - newReserveB = k / newReserveA
    //   - return reserveB - newReserveB

    // TODO 4: Function getReserves() view returns (uint256, uint256)
}`,
      expectedPatterns: [
        "uint256\\s+public\\s+reserveA",
        "uint256\\s+public\\s+reserveB",
        "uint256\\s+public\\s+k",
        "constructor\\s*\\(",
        "reserveA\\s*\\*\\s*reserveB",
        "function\\s+getPrice",
        "k\\s*/",
        "function\\s+getReserves"
      ],
      hints: [
        "Hint 1: In the constructor, set reserveA = 1000, reserveB = 2000, and k = reserveA * reserveB;",
        "Hint 2: In getPrice: calculate newReserveA = reserveA + amountA, then newReserveB = k / newReserveA, then return reserveB - newReserveB;"
      ],
      solution: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleAMM {
    uint256 public reserveA;
    uint256 public reserveB;
    uint256 public k;

    constructor() {
        reserveA = 1000;
        reserveB = 2000;
        k = reserveA * reserveB;
    }

    function getPrice(uint256 amountA) public view returns (uint256) {
        uint256 newReserveA = reserveA + amountA;
        uint256 newReserveB = k / newReserveA;
        return reserveB - newReserveB;
    }

    function getReserves() public view returns (uint256, uint256) {
        return (reserveA, reserveB);
    }
}`
    }
  }
];
