import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import StockDetail from './components/StockDetail';
import { mockStockData, mockCryptoData } from './data/mockData';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [activeTab, setActiveTab] = useState('stocks');
  const [stocks, setStocks] = useState([]);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    setStocks(mockStockData);
    setCryptos(mockCryptoData);
  }, []);

  const handleSymbolSelect = (symbol) => {
    setSelectedSymbol(symbol);
  };

  if (selectedSymbol) {
    return (
      <StockDetail
        symbol={selectedSymbol}
        onBack={() => setSelectedSymbol(null)}
        data={activeTab === 'stocks' 
          ? stocks.find(s => s.symbol === selectedSymbol)
          : cryptos.find(c => c.symbol === selectedSymbol)
        }
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Dashboard 
        stocks={stocks}
        cryptos={cryptos}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSymbolSelect={handleSymbolSelect}
      />
    </div>
  );
}

export default App;
