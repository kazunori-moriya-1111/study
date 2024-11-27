import { useQuery, gql } from "@apollo/client";
import { Result } from "../types/Result";
import { Key, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const GET_RACER = gql`
  query GetRacer($registrationNumber: Int!) {
    getRacer(registrationNumber: $registrationNumber) {
      registrationNumber
      name
      nameKana
      birthday
      height
      weight
      bloodType
      branch
      birthPlace
      registrationPeriod
      racerGrade
      createdAt
      updatedAt
    }
  }
`;

type Racer = {
  registrationNumber: number;
};
type Inputs = {
  registrationNumber: number;
};

const GetRacer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    setRegistrationNumber(data.registrationNumber);

  // const registrationNumber = watch("registrationNumber");
  const [registrationNumber, setRegistrationNumber] = useState(0);

  const { data } = useQuery(GET_RACER, {
    variables: {
      registrationNumber: registrationNumber,
    },
  });

  console.log(data);
  return (
    <>
      <ul>
        <li>存在しない登録番号であれば、insertRecerを実行後にgetRacer</li>
        <li>Query等のロジックをコンポーネント化</li>
        <li>insertRecerに失敗したら存在しない登録番号の表示</li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <label>
            <span className="label required">必須</span>
            <span>姓</span>
            <input
              type="text"
              {...register("registrationNumber", {
                required: "登録番号を入力",
                valueAsNumber: true,
              })}
            />
          </label>
          {errors.registrationNumber?.message && (
            <p className="error-message">
              {errors.registrationNumber?.message}
            </p>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data ? data.getRacer.name : ""}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GetRacer;
