import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export type NinjasProps = {
  id: string;
  name: string;
  email: string;
};

export default function Ninjas({ ninjas }: { ninjas: NinjasProps[] }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: NinjasProps) => (
        <Link
          className={styles.single}
          href={`ninjas/${ninja.id}`}
          key={ninja.id}
        >
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
}
