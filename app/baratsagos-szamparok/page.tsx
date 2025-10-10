//Barátságos számpárokat tároló objektum típusának  definiálása
//Objektum mezői: "a" és "b", típusaik:number
type PárItem = { a: number; b: number };


//változok nélkl:ide felülre a fgv-ek, function:fgv
//megállapít
function osztókÖsszege(n:number): number{  
    if(n <= 1) return 0;                     //egyágú elágazás
    let összeg: number = 1;
    for (let e= 2; e* e < n; e++){             //Csak a csökéig megyünk
        if(n % e == 0) összeg += e; //ha jó, van 1 osztonk
        const osztó_pár: number = n / e; //const vagy let  //osztópár
        if(osztó_pár != e) összeg += osztó_pár
    }
    return összeg; //pl.e=4 , n = 
}
//keres
//count = paraméterek darab száma. Az első count darab pár.
//a  és b barátságos számpár, ha a == osztókösszege(b) és b == osztokÖsszege (a)
function barátságosSzámpárokKeresése(count: number): PárItem[] {
    const bariPárok: PárItem[] = []             //inicalizálom
    let a:number = 2;
    while(bariPárok.length < count){
        const b: number = osztókÖsszege(a);
        if (b > a && a == osztókÖsszege(b)) bariPárok.push({a, b})
        a++;  //ha mind 2 teljesül megy a BariPár vektorba.
    }
    return bariPárok;
 } 


export default function BaratsagosSzamparokPage() {
  //Objektum array létrehozása a párok tárolására
  const bariBárok: PárItem[];                                       //PárItem:object []
  return(
        <div></div>
    ) 
}
//alapok doga, nem ilyenek itt fent, többszörösen átbeszélt:pl. egyágu,többágú ciklus 