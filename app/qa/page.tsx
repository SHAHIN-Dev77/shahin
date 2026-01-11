'use client';

import { useSearchParams } from 'next/navigation'; // For accessing the query parameters
import { useState, useEffect } from 'react';

// Define the Q&A data type
type QnAData = {
  question: string;
  options: string[];
};

const QAPage = () => {
  const searchParams = useSearchParams();
  const area = searchParams.get('area'); // Get the selected area from the query parameter
  const [questions, setQuestions] = useState<QnAData[]>([]);

  // Fetch relevant questions based on the selected area
  useEffect(() => {
    if (area === 'Dhaka') {
      setQuestions([
        { question: 'What type of service do you need?', options: ['Plumbing', 'Cleaning', 'Electrical'] },
        { question: 'Do you need installation or repair service?', options: ['Installation', 'Repair'] },
      ]);
    } else if (area === 'Chittagong') {
      setQuestions([
        { question: 'What type of electrical service do you need?', options: ['Wiring', 'Installation', 'Repair'] },
      ]);
    } else {
      // Default questions for other areas
      setQuestions([
        { question: 'What type of service do you need?', options: ['Plumbing', 'Cleaning', 'Electrical'] },
      ]);
    }
  }, [area]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Service Details</h1>
      <p className="mb-4">Please answer the following questions based on your selected service area: {area}</p>

      <form>
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{q.question}</label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select an option</option>
              {q.options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QAPage;
