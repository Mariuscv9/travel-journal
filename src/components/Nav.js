import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      <Image
        src="/fill 213.png"
        alt="world icon"
        width="24"
        height="24"
        className="globe"
      />
      <h2>Jurnal de calatorie</h2>
    </nav>
  );
}
