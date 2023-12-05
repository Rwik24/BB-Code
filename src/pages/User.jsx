import React, { useState, useEffect } from 'react';

// Sample user data (replace with your actual user data)
const userData = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

const orderHistoryData = [
  {
    id: 1,
    date: '2023-10-01',
    products: ['Product A', 'Product B'],
    total: 50.0,
  },
  {
    id: 2,
    date: '2023-09-15',
    products: ['Product C'],
    total: 30.0,
  },
];

function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function OrderHistory({ orders }) {
  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Date: {order.date}</p>
            <p>Products: {order.products.join(', ')}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="App">
      <header>
        <h1>User Account Section</h1>
      </header>
      <nav>
        <button onClick={() => setActiveTab('profile')}>Profile</button>
        <button onClick={() => setActiveTab('orders')}>Order History</button>
      </nav>
      <main>
        {activeTab === 'profile' ? (
          <UserProfile user={userData} />
        ) : (
          <OrderHistory orders={orderHistoryData} />
        )}
      </main>
    </div>
  );
}

export default App;
