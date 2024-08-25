import Image from "next/image";
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import NewProgram from '../components/NewProgram';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <NewProgram />
    </>
  );
}
