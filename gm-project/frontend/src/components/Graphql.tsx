import { useQuery, gql } from "@apollo/client";

const GET_RESULT = gql`
  query GetResult {
    getResult {
      fieldName
      fieldNo
    }
  }
`;

interface Result {
  fieldName: string;
  fieldNo: string;
}

const Graphql = () => {
  const { data } = useQuery(GET_RESULT);
  //   console.log(data?.getResult[0].fieldName);

  data?.getResult.map((row: Result) => {
    console.log(row.fieldName);
    console.log("とおった");
  });
  return (
    <div>
      {data?.getResult.map((row: Result, index: any) => {
        return (
          <p key={index}>
            {row.fieldName}
            {row.fieldNo}
          </p>
        );
      })}
    </div>
  );
};

export default Graphql;
