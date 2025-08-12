import { Header } from "@/components/header";
import { SheetProvider } from "@/providers/sheet-provider";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <>
      <SheetProvider />
      <Toaster />
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
}

export default DashboardLayout;
