// pages/dashboard.tsx
import { useEffect, useState } from 'react';

interface Request {
  id: string;
  customerName: string;
  serviceType: string;
  description: string;
}

const Dashboard = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const response = await fetch('/api/requests'); // Create this API route to fetch leads
      const data = await response.json();
      setRequests(data.requests);
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Service Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id} className="border p-4 mb-4">
            <h2 className="text-xl">{request.customerName} needs {request.serviceType}</h2>
            <p>{request.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
