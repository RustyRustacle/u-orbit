"use client";

import React from "react";
import { useConnect, useAccount } from "wagmi";
import { injected } from "wagmi/connectors";
import { motion } from "framer-motion";

export default function WalletGate({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();
  const { connect, isPending } = useConnect();

  if (isConnected) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32 relative">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orbit-purple/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orbit-blue/15 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 glass-panel p-10 md:p-16 max-w-2xl w-full text-center"
      >
        {/* Lock Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-orbit-purple/20 to-orbit-blue/20 border border-white/10 flex items-center justify-center"
        >
          <svg className="w-12 h-12 text-orbit-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </motion.div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4 not-italic normal-case tracking-normal">
          Connect Your Wallet
        </h2>

        <p className="text-text-secondary text-lg leading-relaxed mb-4 max-w-md mx-auto">
          To access the Web3 Learning Path, you need to connect a Web3 wallet to this website.
        </p>

        <div className="glass-panel p-6 mb-8 text-left">
          <h3 className="text-text-primary font-semibold text-base mb-3 font-sans not-italic normal-case tracking-normal">
            🦊 Don&apos;t have a wallet yet?
          </h3>
          <ol className="text-text-secondary text-sm space-y-2 list-decimal list-inside">
            <li>Install <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" className="text-orbit-cyan hover:underline font-medium">MetaMask</a> browser extension</li>
            <li>Create a new wallet &amp; save your seed phrase securely</li>
            <li>Come back here and click &quot;Connect Wallet&quot; below</li>
          </ol>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => connect({ connector: injected() })}
          disabled={isPending}
          className="btn-primary w-full sm:w-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Connecting...
            </span>
          ) : (
            "🔗 Connect Wallet"
          )}
        </motion.button>

        <p className="text-text-secondary/60 text-xs mt-6">
          We only request read access to your wallet address. No transactions will be made without your approval.
        </p>
      </motion.div>
    </div>
  );
}
