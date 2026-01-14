'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Sample customer requests data (replace this with real data from your backend)
// const sampleRequests = [
//   { id: 1, name: 'Customer 1', email: 'customer1@example.com', phone: '123456789', service: 'AC Repair', status: 'Paid' },
//   { id: 2, name: 'Customer 2', email: 'customer2@example.com', phone: '987654321', service: 'Washing Machine', status: 'Paid' },
//   { id: 3, name: 'Customer 3', email: 'customer3@example.com', phone: '555555555', service: 'Plumbing', status: 'Pending' },
// ];

export default function Dashboard() {
  const [requests, setRequests] = useState(sampleRequests);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus(data.error || "Something went wrong")
        return
      }

      setStatus("Message sent successfully ✅")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      setStatus("Network error")
    } finally {
      setLoading(false)
    }
  }

  
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>

      
        
          <h2 className="text-xl font-semibold mb-4">Your Customer Requests</h2>

          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Service</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="px-4 py-2">{request.name}</td>
                  <td className="px-4 py-2">{request.email}</td>
                  <td className="px-4 py-2">{request.phone}</td>
                  <td className="px-4 py-2">{request.service}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        request.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                      } text-white`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
     
    </div>
  );
}


  useEffect(() => {
    // Fetch requests from backend
    setRequests(sampleRequests);
  }, []);

  return (
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

