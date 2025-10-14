"use client";

import { useState } from "react";
import toast from "react-hot-toast";

//Barátságos számpárokat tároló objektum típusának  definiálása
//Objektum mezői: "a" és "b", típusaik:number
type PárItem = { a: number; b: number };

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
function barátságosSzámpárokKeresése(count: number): PárItem[] {
  const bariPárok: PárItem[] = []; //inicalizálom
  let a: number = 220;
  while (bariPárok.length < count) {
    const b: number = osztókÖsszege(a);
    if (b > a && a == osztókÖsszege(b)) bariPárok.push({ a, b }); //python:Append, itt:push
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

  function keresés() {
    if (párokSzáma != "" && (párokSzáma < 1 || párokSzáma > 50)) {
      //megnézem, hogy a párokSzáma nem üres e aztán....
      toast.error("Kérem 1 és 50 közötti számot adjon meg!");
      return;
    }
    setBaripárok([]); //Régi párok törlése
    setBaripárok(barátságosSzámpárokKeresése(párokSzáma as number));
  }

  return (
    <main className="flex flex-col items-center justify-center rounded-lg bg-purple-100">
      <div className="flex flex-col items-center justify-center rounded-lg p-5">
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
          <button className="btn btn-primary" onClick={keresés}>
            Keresés
          </button>
        </div>
        <div className="bg-white shadow-xl">
          <h1>Megtalált párok</h1>
          <ul>
            {bariPárok.map((pár) => (
              <li key={pár.a + pár.b}>
                ({pár.a} - {pár.b})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
//alapok doga, nem ilyenek itt fent, többszörösen átbeszélt:pl. egyágu,többágú ciklus
