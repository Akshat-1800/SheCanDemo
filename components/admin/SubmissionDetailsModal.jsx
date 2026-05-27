"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function SubmissionDetailsModal({
  open,
  onOpenChange,
  submission,
  onDelete,
}) {
  if (!submission) return null;

  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const success = await onDelete?.(submission);
      if (success) {
        toast.success("Submission deleted successfully");
        setIsConfirmOpen(false);
        onOpenChange(false);
      } else {
        toast.error("Unable to delete submission");
      }
    } catch (error) {
      toast.error("Unable to delete submission");
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
            <DialogDescription>
              Review the full details for this submission.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Name
              </p>
              <p className="mt-1 text-sm font-medium text-stone-900">
                {submission.name}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Email
              </p>
              <p className="mt-1 text-sm text-stone-700">{submission.email}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Role
              </p>
              <Badge className="mt-1 w-fit">{submission.role}</Badge>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Message
              </p>
              <p className="mt-2 whitespace-pre-wrap text-sm text-stone-700">
                {submission.message}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Submitted
              </p>
              <p className="mt-1 text-sm text-stone-600">
                {formatDate(submission.createdAt)}
              </p>
            </div>
          </div>

          <DialogFooter className="mt-8">
            <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  className="rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  Delete Submission
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Submission?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently remove
                    the submission from the database.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <Button
                      type="button"
                      variant="outline"
                      disabled={isDeleting}
                    >
                      Cancel
                    </Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button
                      type="button"
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className="rounded-full bg-red-500 text-white hover:bg-red-600"
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
