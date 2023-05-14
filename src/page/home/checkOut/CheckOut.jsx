import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
  return <div></div>;
};

export default CheckOut;
