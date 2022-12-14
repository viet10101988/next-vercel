import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/NotFound.module.css";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      // window.location.href = "/";
    }, 3000);
  }, []);

  return (
    <div className={styles["not-found"]}>
      <h1>404: Not Found</h1>
      <p>Redirecting to Home Page ...</p>
      <p>
        Go back to the <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
