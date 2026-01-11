// pages/api/request.ts
import { NextApiRequest, NextApiResponse } from 'next';

const sendNotificationToServiceProviders = async (serviceType: string) => {
  // For simplicity, just log the service type. 
  // You can integrate this with an email service or a notification service.
  console.log(`Notification sent to providers offering ${serviceType}`);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, serviceType, description } = req.body;

    // Save the request to your database here (e.g., MongoDB)
    // const newRequest = await saveRequestToDB({ name, email, serviceType, description });

    // Send notifications to service providers
    await sendNotificationToServiceProviders(serviceType);

    return res.status(200).json({ message: 'Request submitted successfully!' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
