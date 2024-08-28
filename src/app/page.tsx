import Image from "next/image";
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import NewProgram from '../components/NewProgram';
import WhyDicoding from '../components/WhyDicoding';
import LearningPath from '../components/LearningPath';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <NewProgram />
      <WhyDicoding />
      <LearningPath />
    </>
  );
}
