import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Home = () => {
  const { data, isLoading, isError,refetch } = useQuery('cat', () => {
    return axios.get('https://catfact.ninja/fact').then((res) => res.data);
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data</p>;
  }

  return (
    <h1>
      This is home page
      {data && data.fact}
      <button onClick={refetch}>Update</button>
    </h1>
  );
};
