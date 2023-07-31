import Link from "next/link";
// import flagsmith from "../utils/flagsmith";

export const revalidate = 0

export default async function Home() {
  // const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello Worldss</h2>
        <p>{process.env.FLAGSMITH_KEY || 'no key'}</p>
      </div>
      <Link href="/about">About</Link>
      {/* {flags.isFeatureEnabled("search") && <input />} */}
    </main>
  );
}
