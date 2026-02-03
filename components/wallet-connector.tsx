'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'

interface WalletState {
  account: string | null
  isConnected: boolean
  error: string | null
}

export function WalletConnector() {
  const [wallet, setWallet] = useState<WalletState>({
    account: null,
    isConnected: false,
    error: null,
  })
  const [isLoading, setIsLoading] = useState(false)

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && window.ethereum !== undefined
  }

  // Connect to MetaMask
  const connectWallet = async () => {
    if (!isMetaMaskInstalled()) {
      setWallet((prev) => ({
        ...prev,
        error: 'MetaMask is not installed. Please install it to proceed.',
      }))
      return
    }

    setIsLoading(true)
    try {
      const ethereum = window.ethereum as any
      
      // Request account access
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (accounts.length > 0) {
        const address = accounts[0]
        setWallet({
          account: address,
          isConnected: true,
          error: null,
        })

        // Listen for account changes
        ethereum.on('accountsChanged', (newAccounts: string[]) => {
          if (newAccounts.length === 0) {
            setWallet({ account: null, isConnected: false, error: null })
          } else {
            setWallet({ account: newAccounts[0], isConnected: true, error: null })
          }
        })

        // Listen for chain changes
        ethereum.on('chainChanged', () => {
          window.location.reload()
        })
      }
    } catch (error: any) {
      setWallet((prev) => ({
        ...prev,
        error: error.message || 'Failed to connect to MetaMask',
      }))
    } finally {
      setIsLoading(false)
    }
  }

  // Disconnect wallet
  const disconnectWallet = () => {
    setWallet({
      account: null,
      isConnected: false,
      error: null,
    })
  }

  return (
    <div className="flex items-center gap-2">
      {wallet.isConnected ? (
        <>
          <div className="px-3 py-1 rounded-lg bg-accent/20 border border-accent/30">
            <span className="text-xs font-medium text-accent">
              {wallet.account?.slice(0, 6)}...{wallet.account?.slice(-4)}
            </span>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={disconnectWallet}
            className="border-accent text-accent hover:bg-accent/10"
          >
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          size="sm"
          onClick={connectWallet}
          disabled={isLoading}
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
        >
          <Wallet className="w-4 h-4" />
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      )}
      {wallet.error && (
        <span className="text-xs text-red-500">{wallet.error}</span>
      )}
    </div>
  )
}
