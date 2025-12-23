import { DM_Sans, DM_Serif_Display } from "next/font/google";

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main
      className={`${body.className} lowercase relative min-h-screen overflow-hidden  text-stone-900`}
    >
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-amber-200 via-orange-100 to-transparent blur-3xl opacity-70" />
      <div className="pointer-events-none absolute bottom-[-8%] left-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-sky-200 via-emerald-100 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16 lg:py-24">
        <header className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              A human-first crypto UX
            </p>
            <h1
              className={`${display.className} text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl`}
            >
              This is a better fucking crypto website.
            </h1>
            <p className="text-lg font-medium text-stone-700">
              And it actually works.
            </p>
            <p className="text-lg text-stone-600">
              Seriously. What the fuck else do you want?
            </p>
          </div>
        </header>

        <section className="space-y-4 text-lg leading-relaxed text-stone-700">
          <p>You have seen crypto websites.</p>
          <p>They all look the same.</p>
          <p>
            Dark gradients, glowing charts, buzzwords stacked like dogshit
            Jenga, and a giant <strong>CONNECT WALLET</strong> button screaming
            at users like it is a ransom note.
          </p>
          <p>
            You think you are building the future of finance. What you are
            actually building is a hostile onboarding funnel that scares normal
            humans away in 3 seconds flat.
          </p>
          <p>So let me show you a better fucking crypto website.</p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            First rule: do not treat users like cryptography PhDs
          </h2>
          <blockquote className="border-l-4 border-amber-400/70 pl-4 text-stone-600 italic">
            &quot;Wow, I cannot wait to sign an opaque message with my private
            key today.&quot;
          </blockquote>
          <p className="text-stone-700">And yet here you are.</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>Connect Wallet</li>
            <li>Sign Message</li>
            <li>Approve Transaction</li>
            <li>Switch Network</li>
            <li>Insufficient Gas</li>
            <li>Something went wrong</li>
          </ul>
          <p className="text-stone-700">Congrats. You lost them.</p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Authentication should not feel like a bank robbery
          </h2>
          <p className="text-stone-700">Let us talk about login.</p>
          <p className="text-stone-700">Your current flow:</p>
          <ol className="list-decimal space-y-2 pl-5 text-stone-700">
            <li>Click connect wallet</li>
            <li>Choose MetaMask</li>
            <li>Popup appears</li>
            <li>User panics</li>
            <li>Why do you need access to all my accounts?</li>
            <li>User closes tab</li>
          </ol>
          <p className="text-stone-700">Perfect conversion funnel, asshole.</p>
          <p className="text-stone-700">
            A better fucking crypto website does this instead:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>Login with Google</li>
            <li>Login with Apple</li>
            <li>Login with Email</li>
            <li>Wallet is optional</li>
            <li>Wallet is abstracted</li>
            <li>Wallet comes later, when it actually matters</li>
          </ul>
          <p className="text-stone-700">No signatures.</p>
          <p className="text-stone-700">No scary popups.</p>
          <p className="text-stone-700">
            No &quot;sign to prove you own this wallet&quot; bullshit.
          </p>
          <p className="text-stone-700">If you must use a wallet:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>use embedded wallets</li>
            <li>use session keys</li>
            <li>use delegated auth</li>
            <li>use sane defaults</li>
          </ul>
          <p className="text-stone-700">
            Not everyone wants to cosplay as a cryptographer.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Connect wallet is not a feature
          </h2>
          <p className="text-stone-700">It is a tax. A lazy one.</p>
          <p className="text-stone-700">
            You slapped WalletKit / WalletConnect on the page and called it a
            day. You did not design anything. You outsourced UX to a popup.
          </p>
          <p className="text-stone-700">How about you build a site that:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>explains what happens after login</li>
            <li>lets users explore before committing</li>
            <li>shows real data without permission</li>
            <li>delays friction until value is obvious</li>
          </ul>
          <p className="text-stone-700">
            Crazy idea: earn trust before demanding it.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            No fucking dashboards full of lies
          </h2>
          <p className="text-stone-700">Every crypto site has:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>TVL nobody understands</li>
            <li>APY up to 10,000%*</li>
            <li>charts with no context</li>
            <li>numbers rounded until they are fiction</li>
          </ul>
          <p className="text-stone-700">
            How about you build a site that: shows:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>plain numbers</li>
            <li>real outcomes</li>
            <li>clear risks</li>
            <li>boring honesty</li>
          </ul>
          <p className="text-stone-700">
            If your product only looks good with animations, gradients,
            buzzwords, or footnotes hiding reality, your product sucks.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Gas fees are your problem, not the user&apos;s
          </h2>
          <p className="text-stone-700">Users do not care about:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>gas</li>
            <li>chains</li>
            <li>rollups</li>
            <li>bridges</li>
            <li>L2 vs L3 vs whatever-the-fuck</li>
          </ul>
          <p className="text-stone-700">They care about:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>Did it work?</li>
            <li>How much did it cost?</li>
            <li>Can I undo this?</li>
          </ul>
          <p className="text-stone-700">A better crypto website:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>abstracts gas</li>
            <li>uses relayers</li>
            <li>eats fees when possible</li>
            <li>shows final cost, not math homework</li>
          </ul>
          <p className="text-stone-700">
            Stop making users debug your infrastructure choices.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Security without paranoia theater
          </h2>
          <p className="text-stone-700">You think security means:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>more popups</li>
            <li>more warnings</li>
            <li>more confirmations</li>
            <li>more fear</li>
          </ul>
          <p className="text-stone-700">It does not.</p>
          <p className="text-stone-700">Real security is:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>sane defaults</li>
            <li>limited permissions</li>
            <li>revocable access</li>
            <li>transparent actions</li>
            <li>no surprise signatures</li>
          </ul>
          <p className="text-stone-700">
            If a user does not understand what they are signing, you already
            fucked up.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Crypto does not need to look like a spaceship
          </h2>
          <p className="text-stone-700">
            Black background. Neon gradients. Charts everywhere. Random motion
            for no reason.
          </p>
          <p className="text-stone-700">
            Why does your swap page look like a nightclub flyer?
          </p>
          <p className="text-stone-700">How about you build a site that:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>uses readable text</li>
            <li>has contrast that does not burn retinas</li>
            <li>works in daylight</li>
            <li>works on shitty screens</li>
            <li>works when animations are off</li>
          </ul>
          <p className="text-stone-700">
            Finance should look boring. Boring is trustworthy.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Stop fetishizing decentralization
          </h2>
          <p className="text-stone-700">
            Users do not care how decentralized you are. They care if it works.
          </p>
          <p className="text-stone-700">
            Nobody says, &quot;This app failed, but at least it was
            censorship-resistant.&quot;
          </p>
          <p className="text-stone-700">They just leave.</p>
          <p className="text-stone-700">How about you build a site that:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>is pragmatic</li>
            <li>uses centralization where it helps</li>
            <li>decentralization where it matters</li>
            <li>does not turn ideology into UX tax</li>
          </ul>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Education without condescension
          </h2>
          <p className="text-stone-700">No:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>What is a wallet?</li>
            <li>What is gas?</li>
            <li>What is a blockchain?</li>
          </ul>
          <p className="text-stone-700">
            That shit belongs in docs, not the main flow.
          </p>
          <p className="text-stone-700">Here, explanations:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>appear when needed</li>
            <li>are one sentence long</li>
            <li>use human language</li>
            <li>do not assume stupidity</li>
            <li>do not assume expertise</li>
          </ul>
          <p className="text-stone-700">Teach by doing, not by lecturing.</p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            How about you build a site that: respects the user&apos;s time
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>no forced wallet connect</li>
            <li>no forced sign message</li>
            <li>no forced Discord join</li>
            <li>no forced roadmap</li>
          </ul>
          <p className="text-stone-700">You can:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>explore</li>
            <li>click</li>
            <li>read</li>
            <li>leave</li>
            <li>come back</li>
          </ul>
          <p className="text-stone-700">Without being harassed.</p>
        </section>

        <section className="rounded-3xl border border-stone-200/70 bg-white/70 p-8  backdrop-blur">
          <h2 className="text-2xl font-semibold text-stone-900">
            This is still fucking satire, you idiot
          </h2>
          <p className="mt-4 text-stone-700">Nobody is saying:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>never use wallets</li>
            <li>never use crypto</li>
            <li>never use signatures</li>
          </ul>
          <p className="mt-4 text-stone-700">
            We are saying: stop making crypto harder than it needs to be.
          </p>
          <p className="mt-4 text-stone-700">
            Crypto is not broken. You are just building it like an asshole.
          </p>
        </section>

        <section className="space-y-5 border-l-2 border-stone-200/70 pl-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            The bar is low. Please step over it.
          </h2>
          <p className="text-stone-700">A better crypto website:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>feels normal</li>
            <li>behaves predictably</li>
            <li>hides complexity</li>
            <li>respects users</li>
            <li>earns trust</li>
          </ul>
          <p className="text-stone-700">You do not need:</p>
          <ul className="list-disc space-y-2 pl-5 text-stone-700">
            <li>a rebrand</li>
            <li>a new chain</li>
            <li>a new token</li>
            <li>a 40-page whitepaper</li>
          </ul>
          <p className="text-stone-700">
            You need to stop treating users like enemies.
          </p>
        </section>

        <section className="rounded-3xl border border-stone-200/70 bg-white/90 p-8 ">
          <h2 className="text-2xl font-semibold text-stone-900">
            Final thought
          </h2>
          <p className="mt-4 text-stone-700">If your crypto app:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>cannot be used without MetaMask</li>
            <li>scares people with popups</li>
            <li>explains itself with jargon</li>
            <li>hides costs until the end</li>
          </ul>
          <p className="mt-4 text-stone-700">
            It is not early. It is just bad.
          </p>
          <p className="mt-4 text-stone-700">
            Build crypto like you actually want people to use it.
          </p>
          <p className="mt-4 text-lg font-semibold text-stone-900">
            This is a better fucking crypto website.
          </p>
        </section>
      </div>
    </main>
  );
}
