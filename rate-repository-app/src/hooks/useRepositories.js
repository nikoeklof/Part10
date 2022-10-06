import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../grahql/queries";

const useRepositories = () => {
  const { error, loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });
  if (loading) return <h1>Loading...</h1>;
  
  return data;
};

export default useRepositories;
