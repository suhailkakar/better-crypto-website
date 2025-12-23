"use client";

import { useConnectOrCreateWallet, usePrivy } from "@privy-io/react-auth";

export default function PrivyConnect() {
  const { ready, authenticated } = usePrivy();
  const { connectOrCreateWallet } = useConnectOrCreateWallet();

  const buttonLabel = !ready
    ? "Loading Privy..."
    : authenticated
    ? "Account connected"
    : "Create account";

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        onClick={connectOrCreateWallet}
        disabled={!ready}
        className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-400"
      >
        {buttonLabel}
      </button>
      <p className="text-xs text-stone-500">
        Email, Google, Apple, or a wallet. We create one for you if you do not
        have one.
      </p>
      {authenticated ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          You are signed in.
        </p>
      ) : null}
    </div>
  );
}
