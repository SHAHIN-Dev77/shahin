'use client'; // Ensures the component runs only on the client-side
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Using Next.js's `useRouter` to handle routing

// Define the form data type
type RequestFormData = {
  name: string;
  email: string;
  phone: string;
  area: string;
};

const RequestForm = () => {
  const { register, handleSubmit, setValue } = useForm<RequestFormData>();
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  // Simulate fetching user data (replace with actual data fetching logic)
  const getUserData = () => {
    const user = { name: 'John Doe', email: 'johndoe@example.com', phone: '+1234567890' };
    setUserData(user);
    setValue('name', user.name);
    setValue('email', user.email);
    setValue('phone', user.phone);
  };

  // On component mount, fetch user data
  useEffect(() => {
    getUserData();
  }, [setValue]);

  // Handle form submission
  const onSubmit = (data: RequestFormData) => {
    console.log(data);
    // After clicking Next, route to the next page for the Q&A
    router.push(`/qa?area=${encodeURIComponent(data.area)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Request Service</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Your Name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Your Email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          {...register('phone', { required: true })}
          type="text"
          placeholder="Your Phone Number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Area</label>
        <select
          {...register('area', { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select an area</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Khulna">Khulna</option>
          {/* Add more areas as needed */}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </form>
  );
};

export default RequestForm;
