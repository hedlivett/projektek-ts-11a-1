// ez egy Server Side Rendered (SSR) oldal (nincs "use client")

// a searchParams objektumot a Next.js adja át a komponensnek
// a URL query paramétereit tartalmazza
// pl. /teglalap/ssr?a=3&b=4 esetén: { a: "3", b: "4" }

type SearchParams = {
  a?: string;
  b?: string;
};

export default async function TeglalapPage(params: { searchParams: {a ? : string, b?:string}}) {
  const p = await params.searchParams; // ez egy Promise, ezért várjuk meg az értékét
  let a: number = p.a ? Number(p.a) : 3; // ha nincs paraméter, akkor legyen 3
  let b: number = p.b ? Number(p.b) : 4; // ha nincs paraméter, akkor legyen 4
  a = isNaN(a) ? 5 : a; // ha nem alakítható számra, akkor legyen 5
  b = isNaN(b) ? 6 : b; // ha nem alakítható számra, akkor legyen 6

  //union típus használata 
  let terület: number | undefined = undefined;
  let kerület: number | undefined = undefined;

  if (a != 0 && b != 0) {
    terület = a * b;
    kerület = 2 * (a + b);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col rounded-lg bg-white p-6 font-mono text-lg shadow-lg">
        <form>
          <p>Téglalap kerülete és területe</p>
          <p>
            a oldal:
            <input
              className="input input-primary"
              defaultValue={a}
              min={0}
              name="a"
              placeholder="Kérem az oldal hosszát!"
              required
              step="any"
              type="string"
            />
          </p>
          <p>
            b oldal:
            <input
              className="input input-primary"
              defaultValue={b}
              min={0}
              name="b"
              placeholder="Kérem az oldal hosszát!"
              required
              step="any"
              type="string"
            />
          </p>
          {a == 0 || b == 0 ? (
            <div>
              <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
            </div>
          ) : (
            <div>
              <p>Kerület: {kerület}</p>
              <p>Terület: {terület}</p>
            </div>
          )}

          {/* Példák egyágú elágazásra: */}

          {a > 0 && b > 0 && (
            <div>
              <p>Kerület: {kerület}</p>
              <p>Terület: {terület}</p>
            </div>
          )}

          {(a == 0 || b == 0) && (
            <div>
              <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
            </div>
          )}

          <button className="hidden" type="submit"></button>
        </form>
      </div>
    </div>
  );
}
