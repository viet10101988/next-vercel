import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { NinjasProps } from ".";

export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    paths: data.map((ninja: { id: string }) => {
      return {
        params: { id: ninja.id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const Details = (ninja: { data: NinjasProps }) => {
  return (
    <div>
      <h1>{ninja.data.name}</h1>
      <p>{ninja.data.email}</p>
    </div>
  );
};

export default Details;
