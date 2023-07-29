import Link from "next/link";
import flagsmith from "../utils/flagsmith";

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>{process.env.FLAGSMITH_KEY}</p>
      </div>
      <Link href="/about">About</Link>
      {flags.isFeatureEnabled("search") && <input />}
    </main>
  );
}
