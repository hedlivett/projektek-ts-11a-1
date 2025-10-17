"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

//Barátságos számpárokat tároló objektum típusának  definiálása
//Objektum mezői: "a" és "b", típusaik:number
type PárItem = { ssz: number; a: number; b: number };

//
//változok nélkl:ide felülre a fgv-ek, function:fgv
//megállapít
function osztókÖsszege(n: number): number {
  if (n <= 1) return 0; //egyágú elágazás
  let összeg: number = 1;
  for (let e = 2; e * e < n; e++) {
    //Csak a csökéig megyünk
    if (n % e == 0) {
      //ha jó, van 1 osztonk
      összeg += e;
      const osztó_pár: number = n / e; //const vagy let  //osztópár
      if (osztó_pár != e) összeg += osztó_pár;
    }
  }
  return összeg; //pl.e=4 , n =
}
//keres
//count = paraméterek darab száma. Az első count darab pár.
//a  és b barátságos számpár, ha a == osztókösszege(b) és b == osztokÖsszege (a)
async function barátságosSzámpárokKeresése(
  count: number,
  setPárok: React.Dispatch<React.SetStateAction<PárItem[]>>,
) {
  const bariPárok: PárItem[] = []; //inicalizálom
  let a: number = 220;
  let párokSzáma: number = 0;
  while (párokSzáma < count) {
    const b: number = osztókÖsszege(a);
    if (b > a && a == osztókÖsszege(b)) {
      //python:Append, itt:push
      párokSzáma++;
      setPárok((prev) => [{ ssz: párokSzáma, a, b }, ...prev]); //feltesszük a tetejére a tömböt?  //ott ki kell írni, többinél nem, tsx huncutság
      //várakozás 1 ezermásodpercre, hogy betöltsön, kiszámolja:
      await new Promise((resolve) => setTimeout(resolve, 1)); //dekor
    }
    a++; //ha mind 2 teljesül megy a BariPár vektorba.
  }
  return bariPárok;
}
export default function BaratsagosSzamparokPage() {
  //Objektum array létrehozása a párok tárolására
  //State változó a párok számának bekérésére
  const [párokSzáma, setPárokSzáma] = useState<number | "">(5); //vagy szám vagy semmi, de alapból 5
  //State változó a barátságos számpárok tárolásához
  const [bariPárok, setBaripárok] = useState<PárItem[]>([]);
  const [isWorking, setIsWorking] = useState(false); //State változó a számítási folyamathoz

  async function keresés() {
    if (párokSzáma != "" && (párokSzáma < 1 || párokSzáma > 50)) {
      //megnézem, hogy a párokSzáma nem üres e aztán....
      toast.error("Kérem 1 és 50 közötti számot adjon meg!");
      return;
    }
    setIsWorking(true);
    setBaripárok([]); //Régi párok törlése
    await barátságosSzámpárokKeresése(párokSzáma as number, setBaripárok); //await:vár
    setIsWorking(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex min-h-screen w-100 flex-col items-center justify-center gap-y-4 rounded-xl bg-purple-100 p-4">
        <Image alt="Kep" height={100} src="maci.png" width="100" />
        <h1 className="text-3xl">✮Barátságos Számpárok✮</h1>
        <h1 className="bold text-pink-300">╰(*°▽°*)╯</h1>
        <div>
          <label htmlFor="darabszam">Párok száma❀</label>
          <input
            className="input input-primary"
            type="text"
            value={párokSzáma}
            onChange={(e) => setPárokSzáma(e.target.value == "" ? "" : Number(e.target.value))} //érték nélkül 0-át ad, utána nem tudod letörölni
            //ha nem hamis hanem igaz megy
          />
        </div>
        <div>
          {" "}
          {/* működik?-> ez vagy ezt írja ki */}
          <button className="btn brightness-200" onClick={keresés}>
            {isWorking ? "Keresés folyamatban..." : "Keresés indítása"}
          </button>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-xl">
          <h1 className="font-bold text-pink-300">Megtalált párok</h1>
          <ul className="">
            {bariPárok.map((pár, i) => (
              <li key={i}>
                {pár.ssz}. {pár.a} - {pár.b} {/* //addig megy míg meg nem találja a kért párokat */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
//alapok doga, nem ilyenek itt fent, többszörösen átbeszélt:pl. egyágu,többágú ciklus
