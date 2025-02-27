import React from 'react';
import PoolItem from './PoolItem';
import SwapComponent from './SwapComponent';

export default function SwapInterface() {
  return (
    <div className="p-6 min-h-screen bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold text-white mb-4">Liquidity Pool</h2>
          <PoolItem 
            tokenPair="TKA/TKB"
            poolNumber="0"
            fee="0.03%"
            volume24h="$1,708,112"
            liquidity="$231,643"
            apr="0.3% - 42.9%"
            token1Image="/tknA.png"
            token2Image="/tknB.png"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold text-white mb-4">Token Swap</h2>
          <SwapComponent 
            className="h-full"
            onSwapSuccess={() => {
              console.log("Swap completed successfully");
            }}
          />
        </div>
      </div>
    </div>
  );
}