import EntranceCardCompetition from "@/components/pages/competitions/EntranceCardCompetition";
import EntranceCardMiniDeneme from "@/components/pages/denemeler/EntranceCardMiniDeneme";
import EntranceCardGames from "@/components/pages/games/EntranceCardGames";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="basis-31/4 w-1/6 flex justify-start space-x-2 items-center mt-4 font-light">
        <hr className="basis-4 border-t-2 border-black " />
        <p className="basis-8 border-red-900">YKS</p>
      </div>
      <div className="flex justify-center space-x-24 items-center">
        <EntranceCardCompetition type="Yarışma" description="İstila" pointFactor={2} hak={1} lesson="Matematik" difficulty="normal" subject="İntegral"/>
        <Link href="/deneme"><EntranceCardMiniDeneme type="Mini Deneme" time={60} maxPoint={250} difficulty="normal" /></Link>
        <Link href="/snake"><EntranceCardGames type="Oyun" description="Yılan" pointFactor={2} hak={3} lesson="Matematik" difficulty="normal" subject="İntegral"/></Link>
      </div>
      {/* <Hero /> */}
    </main>
  );
}
