import Image from "next/image";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
  return (
    <div className="">
      <h1>hello world</h1>
    </div>
  );
}
