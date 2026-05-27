"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SubmissionTable({
  items,
  onSelect,
  clipMessage,
  formatDate,
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.id}
            className="cursor-pointer"
            onClick={() => onSelect(item)}
          >
            <TableCell className="font-medium text-stone-900">
              {item.name}
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Badge>{item.role}</Badge>
            </TableCell>
            <TableCell className="max-w-xs text-sm text-stone-600">
              {clipMessage(item.message)}
            </TableCell>
            <TableCell className="text-sm text-stone-500">
              {formatDate(item.createdAt)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
