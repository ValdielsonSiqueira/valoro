"use client"

import { Skeleton } from "@valoro/ui"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@valoro/ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@valoro/ui"

export function SectionCardsSkeleton() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-2 lg:px-6 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      <Card className="@container/card">
        <CardHeader>
          <Skeleton className="h-4 w-20" />
          <CardTitle>
            <Skeleton className="h-8 w-32 mt-2" />
          </CardTitle>
          <div className="mt-2">
            <Skeleton className="h-6 w-24" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-48" />
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <Skeleton className="h-4 w-20" />
          <CardTitle>
            <Skeleton className="h-8 w-32 mt-2" />
          </CardTitle>
          <div className="mt-2">
            <Skeleton className="h-6 w-24" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-48" />
        </CardFooter>
      </Card>
    </div>
  )
}

export function ChartAreaInteractiveSkeleton() {
  return (
    <div className="px-4 lg:px-6">
      <div className="rounded-lg border p-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-9 w-24" />
        </div>
        <div className="aspect-video w-full">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export function DataTableSkeleton() {
  return (
    <div className="px-4 lg:px-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-7 w-24" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Skeleton className="h-4 w-4" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-4" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-32" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-20" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-16" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-24" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-28" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-24" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-16" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-40" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8 rounded" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4 px-4">
        <Skeleton className="h-4 w-32" />
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-9 w-20" />
          </div>
          <Skeleton className="h-4 w-24" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

