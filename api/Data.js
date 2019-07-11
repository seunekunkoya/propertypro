module.exports = {
  users: [
    {
      id: 1,
      email: 'john@gmail.com',
      first_name: 'John',
      last_name: 'Doe',
      password: 'johndoe',
      phoneNumber: '09081234567',
      address: '4 John Doe Street',
      registered: '2019-7-5 09:23:23',
      isAdmin: true
    },
    {
      id: 2,
      email: 'jane@gmail.com',
      first_name: 'Jane',
      last_name: 'Stark',
      password: 'janestark',
      phoneNumber: '09087654321',
      address: '4 stark jane Street',
      registered: '2019-7-5 09:23:23',
      isAdmin: true
    },
    {
      id: 3,
      email: 'wesbos@gmail.com',
      firstName: 'Wes',
      lastName: 'Bos',
      password: 'wesbos',
      phoneNumber: '09081243657',
      address: '4 wes bos Street',
      registered: '2019-7-5 09:23:23',
      isAdmin: false
    },
    {
      id: 4,
      email: 'tyrion@gmail.com',
      firstName: 'Tyrion',
      lastName: 'Lanister',
      password: 'tyrionlanister',
      phoneNumber: '09087162534',
      address: '4 tyrion lanister Street',
      registered: '2019-7-5 09:23:23',
      isAdmin: false
    }
  ],

  properties: [
    {
      id: 1,
      owner: 1, // user id
      status: 'available', // sold,available - default is available
      price: 100000.0,
      state: 'Lagos', // State where property is located
      city: 'Ikeja', // City where property is located
      address: '4 Oba Akran',
      type: '2 bedroom', // 2 bedroom, 3 bedroom etc
      created_on: '2019-7-5 09:23:23',
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
      created_on: '2019-7-6 09:23:23',
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
      created_on: '2019-7-5 09:24:23',
      image_url: 'https://'
    }
  ],
  flags: [
    {
      id: 1,
      property_id: 3,
      created_on: '2019-7-5 09:24:23',
      reason: 'pricing',
      description: 'the price is too high'
    },
    {
      id: 2,
      property_id: 2,
      created_on: '2019-7-5 09:24:23',
      reason: 'weird demands',
      description: 'exhorbitant agent fee'
    },
    {
      id: 3,
      property_id: 1,
      created_on: '2019-7-5 09:24:23',
      reason: 'pricing',
      description: 'the price is too high'
    }
  ]
};
