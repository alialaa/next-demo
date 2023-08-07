import Link from "next/link";
import flagsmith from "../utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>new life, new hope!!</p>
        <p>New change!!!</p>
      </div>
      <Link href="/about">About</Link>
      {flags.isFeatureEnabled("search") && <input />}
    </main>
  );
}
