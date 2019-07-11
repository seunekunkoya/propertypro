const properties = [
  {
    id: 1,
    owner: 1, // user id
    status: 'available', // sold,available - default is available
    price: 100000.0,
    state: 'Lagos', // State where property is located
    city: 'Ikeja', // City where property is located
    address: '4 Oba Akran',
    type: '2 bedroom', // 2 bedroom, 3 bedroom etc
    created_on: '',
    image_url: 'https://'
  },
  {
    id: 2,
    owner: 2, // user id
    status: 'available', // sold,available - default is available
    price: 100000.0,
    state: 'Lagos', // State where property is located
    city: 'Magodo', // City where property is located
    address: '4 Mark Lane',
    type: '4 bedroom', // 2 bedroom, 3 bedroom etc
    created_on: '',
    image_url: 'https://'
  },
  {
    id: 3,
    owner: 1, // user id
    status: 'sold', // sold,available - default is available
    price: 100000.0,
    state: 'Oyo', // State where property is located
    city: 'Ibadan', // City where property is located
    address: '4 Oba Akran',
    type: '3 bedroom', // 2 bedroom, 3 bedroom etc
    created_on: '',
    image_url: 'https://'
  }
];

module.exports = properties;
