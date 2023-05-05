import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Cards from "@/components/Cards";
import data from "./data.js";

export default function Home() {
  const cards = data.map((data) => {
    return <Cards key={data.id} {...data} />;
  });
  return (
    <main key={data.id} className={styles.main}>
      <Nav />
      {cards}
    </main>
  );
}
