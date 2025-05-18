import { NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as LeadData;
    
    // Here would be the code to save the lead to a database or send an email
    // For this example, we're just logging the data and returning success
    console.log('Lead received:', data);
    
    // Return success
    return NextResponse.json({ message: 'Lead received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json({ message: 'Error processing lead' }, { status: 500 });
  }
} 