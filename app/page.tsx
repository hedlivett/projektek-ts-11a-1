import Image from "next/image";
import Link from "next/link";

type TLink = {
  id: number;
  href: string;
  label: string;
};

const links: TLink[] = [
  { id: 1, href: "/counter", label: "Számláló" },
  { id: 2, href: "/teglalap/ssr", label: "Téglalap KT - SSR" },
  { id: 3, href: "/teglalap/csr", label: "Téglalap KT - CSR" },
  { id: 4, href: "/haromszog", label: "Háromszög T-K" },
  { id: 5, href: "/use-effect-demo", label: "useEffect demo " },
  { id: 6, href: "/baratsagos-szamparok", label: "Barátságos számpárok" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
        <Image alt="Globe" height={100} src="globe.svg" width="100" />
        <h1 className="mt-2 text-2xl font-bold">Hello World!</h1>
        <ul className="mt-3 list-disc">
          {links.map((link) => (
            <li key={link.id}>
              <Link className="text-blue-500 hover:underline" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// const Home = () => {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
//       <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
//         <Image src="globe.svg" alt="Globe" width="100" height="100" />
//         <h1 className="text-2xl font-bold mt-2">Hello World!</h1>
//       </div>
//     </main>
//   );
// };
// export default Home;

//dogával megvárjuk a skóciásokat
