import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'customer',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || '';
  const customer = await fetchFilteredCustomers(query);
  return <Table customers={customer} />;
}
