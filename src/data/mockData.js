export const mockStockData = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 189.95,
    change: 2.45,
    changePercent: 1.31,
    marketCap: '2.98T',
    pe: 32.5,
    volume: '45.2M',
    high52w: 198.5,
    low52w: 124.17,
    avgVolume: '52.1M',
    description: 'شركة أبل - رائدة في التكنولوجيا والأجهزة الإلكترونية',
    priceHistory: [
      { date: 'Jan', price: 150 },
      { date: 'Feb', price: 165 },
      { date: 'Mar', price: 172 },
      { date: 'Apr', price: 168 },
      { date: 'May', price: 180 },
      { date: 'Jun', price: 189.95 }
    ],
    technicalAnalysis: {
      rsi: 65.4,
      macd: 'إيجابي',
      movingAvg50: 185.2,
      movingAvg200: 172.5,
      bollingerBands: { upper: 195, lower: 175, middle: 185 }
    },
    signals: {
      buy: 0,
      sell: 1,
      hold: 2
    }
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.58,
    change: -1.23,
    changePercent: -0.86,
    marketCap: '1.87T',
    pe: 28.1,
    volume: '32.5M',
    high52w: 152.84,
    low52w: 102.21,
    avgVolume: '38.2M',
    description: 'شركة ألفابت - محرك البحث جوجل والخدمات الإلكترونية',
    priceHistory: [
      { date: 'Jan', price: 130 },
      { date: 'Feb', price: 135 },
      { date: 'Mar', price: 140 },
      { date: 'Apr', price: 148 },
      { date: 'May', price: 145 },
      { date: 'Jun', price: 142.58 }
    ],
    technicalAnalysis: {
      rsi: 45.2,
      macd: 'محايد',
      movingAvg50: 144.5,
      movingAvg200: 135.8,
      bollingerBands: { upper: 150, lower: 130, middle: 140 }
    },
    signals: {
      buy: 1,
      sell: 1,
      hold: 1
    }
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 417.82,
    change: 5.12,
    changePercent: 1.24,
    marketCap: '3.12T',
    pe: 35.2,
    volume: '21.3M',
    high52w: 420.5,
    low52w: 295.61,
    avgVolume: '25.6M',
    description: 'شركة مايكروسوفت - البرمجيات والخدمات السحابية',
    priceHistory: [
      { date: 'Jan', price: 350 },
      { date: 'Feb', price: 370 },
      { date: 'Mar', price: 385 },
      { date: 'Apr', price: 395 },
      { date: 'May', price: 410 },
      { date: 'Jun', price: 417.82 }
    ],
    technicalAnalysis: {
      rsi: 72.1,
      macd: 'إيجابي',
      movingAvg50: 410.5,
      movingAvg200: 385.2,
      bollingerBands: { upper: 425, lower: 395, middle: 410 }
    },
    signals: {
      buy: 0,
      sell: 2,
      hold: 1
    }
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 242.84,
    change: -8.45,
    changePercent: -3.37,
    marketCap: '768B',
    pe: 68.5,
    volume: '156.8M',
    high52w: 299.29,
    low52w: 101.81,
    avgVolume: '142.3M',
    description: 'شركة تيسلا - السيارات الكهربائية والطاقة النظيفة',
    priceHistory: [
      { date: 'Jan', price: 260 },
      { date: 'Feb', price: 255 },
      { date: 'Mar', price: 240 },
      { date: 'Apr', price: 235 },
      { date: 'May', price: 250 },
      { date: 'Jun', price: 242.84 }
    ],
    technicalAnalysis: {
      rsi: 35.8,
      macd: 'سلبي',
      movingAvg50: 248.3,
      movingAvg200: 265.1,
      bollingerBands: { upper: 280, lower: 220, middle: 250 }
    },
    signals: {
      buy: 2,
      sell: 1,
      hold: 0
    }
  }
];

export const mockCryptoData = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 43852.50,
    change: 1250.50,
    changePercent: 2.94,
    marketCap: '857B',
    volume: '28.5B',
    high24h: 44200,
    low24h: 42800,
    description: 'البيتكوين - أول عملة رقمية لامركزية',
    priceHistory: [
      { date: 'Mon', price: 42000 },
      { date: 'Tue', price: 42500 },
      { date: 'Wed', price: 41800 },
      { date: 'Thu', price: 42800 },
      { date: 'Fri', price: 43200 },
      { date: 'Sat', price: 43852.50 }
    ],
    technicalAnalysis: {
      rsi: 58.5,
      macd: 'إيجابي',
      movingAvg50: 42500,
      movingAvg200: 40200,
      bollingerBands: { upper: 44500, lower: 41500, middle: 43000 }
    },
    signals: {
      buy: 1,
      sell: 0,
      hold: 2
    }
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2345.67,
    change: 85.32,
    changePercent: 3.77,
    marketCap: '281.5B',
    volume: '15.2B',
    high24h: 2380,
    low24h: 2280,
    description: 'إيثيريوم - منصة العقود الذكية',
    priceHistory: [
      { date: 'Mon', price: 2250 },
      { date: 'Tue', price: 2280 },
      { date: 'Wed', price: 2220 },
      { date: 'Thu', price: 2300 },
      { date: 'Fri', price: 2320 },
      { date: 'Sat', price: 2345.67 }
    ],
    technicalAnalysis: {
      rsi: 62.3,
      macd: 'إيجابي',
      movingAvg50: 2300,
      movingAvg200: 2100,
      bollingerBands: { upper: 2400, lower: 2200, middle: 2300 }
    },
    signals: {
      buy: 1,
      sell: 0,
      hold: 2
    }
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    price: 0.6245,
    change: 0.0185,
    changePercent: 3.05,
    marketCap: '33.5B',
    volume: '1.2B',
    high24h: 0.635,
    low24h: 0.605,
    description: 'ريبل - شبكة الدفع والتحويل الأموال',
    priceHistory: [
      { date: 'Mon', price: 0.58 },
      { date: 'Tue', price: 0.595 },
      { date: 'Wed', price: 0.605 },
      { date: 'Thu', price: 0.615 },
      { date: 'Fri', price: 0.62 },
      { date: 'Sat', price: 0.6245 }
    ],
    technicalAnalysis: {
      rsi: 55.7,
      macd: 'محايد',
      movingAvg50: 0.61,
      movingAvg200: 0.58,
      bollingerBands: { upper: 0.64, lower: 0.59, middle: 0.615 }
    },
    signals: {
      buy: 1,
      sell: 0,
      hold: 2
    }
  }
];
