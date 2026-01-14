'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Define the Q&A data type
type QnAData = {
  question: string;
  options: string[];
};

const QAPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || ''; // Simulating the selected category (replace with actual logic)
  const [questions, setQuestions] = useState<QnAData[]>([]);

  // Fetch relevant questions based on the selected category
  const loadQuestions = (category: string) => {
    if (category === 'AC') {
      setQuestions([
        { question: 'What type of AC do you have?', options: ['Split', 'Window'] },
        { question: 'Do you need repair or installation?', options: ['Repair', 'Installation'] },
      ]);
    } else if (category === 'Washing Machine') {
      setQuestions([
        { question: 'What type of washing machine is it?', options: ['Front Load', 'Top Load'] },
        { question: 'Do you need repair or installation?', options: ['Repair', 'Installation'] },
      ]);
    } else if (category === 'Plumbing') {
      setQuestions([
        { question: 'What plumbing service do you need?', options: ['Pipe Repair', 'Installation'] },
        { question: 'Do you need assistance with drainage?', options: ['Yes', 'No'] },
      ]);
    } else if (category === 'Cleaning') {
      setQuestions([
        { question: 'What cleaning service do you need?', options: ['House Cleaning', 'Office Cleaning'] },
        { question: 'Do you need deep cleaning?', options: ['Yes', 'No'] },
      ]);
    }
  };

  // Load questions based on the selected category (you should replace with real logic to fetch the category)
  useEffect(() => {
    loadQuestions(category);
  }, [category]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Service Details</h1>
      <p className="mb-4">Please answer the following questions based on your selected service:</p>

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

