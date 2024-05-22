import { BASE_URL } from '@/lib/settings';

interface Params {
  params: {};
  searchParams: { [key: string]: string | number };
}

export default async function getAllProducts(
  url: string,
  id: number | string = '',
  params?: Params
): Promise<any> {
  const searchParams = new URLSearchParams();

  if (params?.searchParams) {
    for (const [key, value] of Object.entries(params.searchParams)) {
      searchParams.append(key, value.toString());
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/${url}/${id}?${searchParams.toString()}`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}