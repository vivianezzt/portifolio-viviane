import Image from "next/image";

export default function Home() {
  return (

        <Image
          src="/vivi.svg"
          alt="Viviane Aguiar"
          width={180}
          height={38}
          priority
        />
  );
}
