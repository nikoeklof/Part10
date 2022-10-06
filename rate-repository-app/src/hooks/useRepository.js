import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../grahql/queries";

const useRepository = (id) => {
  const { error, loading, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",

    variables: { repositoryId: id },
  });

  if (loading) return loading;

  return data;
};

export default useRepository;
