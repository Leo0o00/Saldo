import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const CategoryToolTip = ({ active, payload }: any) => {
  const isVisible = active && payload && payload.length;

  // console.log("PAYLOAAAAD: ", payload);
  // const name = payload[0].payload.name;
  // const value = payload[0].value;

  return (
    <div
      className="custom-tooltip"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      {isVisible && (
        <div className="rounded-sm bg-white shadow-sm border-sm border overflow-hidden w-auto">
          <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
            {payload[0].payload.name}
          </div>
          <Separator />
          <div className=" p-2 px-3 space-y-1 gap-x-2">
            <div className="flex p-2 px-3 space-y-1 gap-x-2">
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex items-center gap-x-2">
                  <div className="size-1.5 bg-rose-500 rounded-full" />
                  <p className="text-sm text-muted-foreground">Expenses</p>
                </div>
              </div>
              <p className="text-sm text-right font-medium">
                {formatCurrency(payload[0].value * -1)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
