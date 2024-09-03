import AiChallange from "@/components/home-screen/AiChallange";
import EventInfo from "@/components/home-screen/EventInfo";
import ExploreChallenges from "@/components/home-screen/ExploreChallenges";
import InitialPage from "@/components/home-screen/InitialPage";

export default function Home() {
  return (
    <main className="">
      <InitialPage />
      <AiChallange />
      <ExploreChallenges />
      <EventInfo />
    </main>
  );
}
