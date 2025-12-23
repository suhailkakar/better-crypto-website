"use client";

import { PrivyProvider } from "@privy-io/react-auth";

const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={appId}
      config={{
        loginMethods: ["email", "google", "apple", "wallet"],
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
