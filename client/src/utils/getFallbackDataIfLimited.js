function getFallbackDataIfLimited() {
  // Mock data for currency market
  const mockData = [
    { currency: "Bitcoin", price: 50000 },
    { currency: "Ethereum", price: 3000 },
    { currency: "Cardano", price: 2 },
    // Add more mock data as needed
  ];

  return mockData;
}

export default getFallbackDataIfLimited;
