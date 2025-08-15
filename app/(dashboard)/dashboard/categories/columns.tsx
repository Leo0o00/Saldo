"use client";

import { InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Actions from "@/app/(dashboard)/dashboard/categories/actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ResponseType = InferResponseType<
  typeof client.api.categories.$get,
  200
>["data"][0];

export const columns: ColumnDef<ResponseType>[] = [
  //checkbox
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  //name
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
  },
  //actions
  {
    id: "actions",
    cell: ({ row }) => <Actions id={row.original.id} />,
  },
];
