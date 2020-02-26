import React from "react";
import Layout from "../components/layout";

const Page = props => {
  console.log(props);
  return (
    <Layout>
      <div>
        <h1>{props.pageContext.name}</h1>
        <p>{props.pageContext.description}</p>
      </div>
    </Layout>
  );
};
export default Page;
