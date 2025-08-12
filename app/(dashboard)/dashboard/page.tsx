"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";

function Dashboard() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>New Account</Button>
    </div>
  );
}

export default Dashboard;
