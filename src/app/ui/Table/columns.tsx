"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { DataTableColumnHeader } from "./data-table-column-header";

export const columns = [
  {
    accessorKey: "Date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("Date")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "Project Title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {

      return (
        <div className="">
          <span className="max-w-[300px] wrap-normal font-medium text-wrap">
            {row.getValue("Project Title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Client",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client" />
    ),
    cell: ({ row }) => {

      return (
        <div className="w-[300px]">
          <span className="font-medium text-wrap truncate">
            {row.getValue("Client")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {

      return (
        <div className="w-[500px]">
          <span className="font-medium text-wrap">
            {row.getValue("Description")}
          </span>
        </div>
      );
    },
  }
];
