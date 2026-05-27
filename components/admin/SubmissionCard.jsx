"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SubmissionCard({ item, clipMessage, formatDate, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card
        className="cursor-pointer border-stone-100 bg-[#fff7f1] transition hover:-translate-y-0.5 hover:shadow-md"
        onClick={() => onSelect(item)}
      >
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-stone-900">{item.name}</p>
            <p className="text-xs text-stone-600">{item.email}</p>
          </div>
          <Badge className="w-fit">{item.role}</Badge>
          <p className="text-sm text-stone-700">{clipMessage(item.message)}</p>
          <p className="text-xs text-stone-500">{formatDate(item.createdAt)}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
