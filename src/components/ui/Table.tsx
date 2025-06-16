import { cn } from '@/utils'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from './theme'
import React, { useState, useEffect, useMemo } from 'react'
import { CaretDown, CaretUp, CaretLeft, CaretRight, CheckSquare, Square } from '@phosphor-icons/react'

export interface TableColumn<T> {
  header: string
  accessor: keyof T
  cell?: (row: T) => React.ReactNode
  sortable?: boolean
  width?: string
  align?: 'left' | 'center' | 'right'
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  pageSize?: number
  className?: string
  onRowSelect?: (rows: T[]) => void
  selectable?: boolean
  sortable?: boolean
  caption?: string
  emptyMessage?: string
  variant?: 'default' | 'striped' | 'bordered'
  size?: 'sm' | 'md' | 'lg'
  showPagination?: boolean
}

type SortConfig<T> = {
  key: keyof T | null
  direction: 'asc' | 'desc'
}

const sizeMap = {
  sm: {
    th: 'px-3 py-2 text-xs',
    td: 'px-3 py-2 text-xs',
    checkbox: 'w-4 h-4'
  },
  md: {
    th: 'px-4 py-3 text-sm',
    td: 'px-4 py-3 text-sm',
    checkbox: 'w-5 h-5'
  },
  lg: {
    th: 'px-6 py-4 text-base',
    td: 'px-6 py-4 text-base',
    checkbox: 'w-5 h-5'
  }
}

export function Table<T extends { id: string | number }>({
  columns,
  data,
  pageSize = 10,
  className,
  onRowSelect,
  selectable = false,
  sortable = true,
  caption,
  emptyMessage = "No data available",
  variant = 'default',
  size = 'md',
  showPagination = true
}: TableProps<T>) {
  const { actualTheme: theme } = useTheme()
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: 'asc' })
  
  // Reset pagination when data changes
  useEffect(() => {
    setCurrentPage(1)
  }, [data.length])
  
  // Handle row selection
  const toggleRowSelection = (id: string | number) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
    
    if (onRowSelect) {
      const selectedItems = data.filter(item => newSelected.has(item.id))
      onRowSelect(selectedItems)
    }
  }
  
  // Handle select all rows
  const toggleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set())
      if (onRowSelect) {
        onRowSelect([])
      }
    } else {
      const newSelected = new Set(paginatedData.map(row => row.id))
      setSelectedRows(newSelected)
      if (onRowSelect) {
        onRowSelect(paginatedData)
      }
    }
  }
  
  // Handle sorting
  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc'
    
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    
    setSortConfig({ key, direction })
  }
  
  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!]
      const bValue = b[sortConfig.key!]
      
      if (aValue === bValue) return 0
      
      // Handle different types of values
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }
      
      // For numbers and other types
      return sortConfig.direction === 'asc'
        ? aValue < bValue ? -1 : 1
        : aValue < bValue ? 1 : -1
    })
  }, [data, sortConfig])
  
  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return sortedData.slice(startIndex, startIndex + pageSize)
  }, [sortedData, currentPage, pageSize])
  
  // Calculate total pages
  const totalPages = Math.ceil(sortedData.length / pageSize)
  
  // Get variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'striped':
        return {
          tbody: 'divide-y divide-slate-200 dark:divide-slate-700',
          tr: 'even:bg-slate-50 dark:even:bg-slate-800/50'
        }
      case 'bordered':
        return {
          table: 'border-collapse',
          th: 'border border-slate-200 dark:border-slate-700',
          td: 'border border-slate-200 dark:border-slate-700',
          tbody: ''
        }
      default:
        return {
          tbody: 'divide-y divide-slate-200 dark:divide-slate-700',
          tr: ''
        }
    }
  }
  
  const variantStyles = getVariantStyles()
    return (
    <div className="space-y-4">
      <div className={cn(
        'w-full overflow-x-auto rounded-lg border',
        tokens[theme].border.default,
        tokens[theme].background.primary,
        className
      )}>
        <table className={cn(
          "w-full caption-bottom text-sm",
          variantStyles.table
        )}>
          {caption && (
            <caption className={cn("mt-4 text-sm", tokens[theme].text.muted)}>
              {caption}
            </caption>
          )}
          <thead className={tokens[theme].background.secondary}>
            <tr>
              {selectable && (
                <th className={cn(
                  sizeMap[size].th,
                  'w-[40px]',
                  tokens.light.text.secondary,
                  'dark:text-slate-400',
                  variantStyles.th
                )}>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded"
                      aria-label={selectedRows.size === paginatedData.length ? "Deselect all rows" : "Select all rows"}
                    >
                      {selectedRows.size === paginatedData.length && paginatedData.length > 0 ? (
                        <CheckSquare className={cn(sizeMap[size].checkbox, "text-indigo-600 dark:text-indigo-400")} weight="fill" />
                      ) : (
                        <Square className={cn(sizeMap[size].checkbox, "text-slate-400 dark:text-slate-500")} />
                      )}
                    </button>
                  </div>
                </th>
              )}
              {columns.map(col => (
                <th
                  key={String(col.header)}
                  className={cn(
                    sizeMap[size].th,
                    'font-semibold text-left',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                    tokens.light.text.secondary,
                    'dark:text-slate-400',
                    col.width && col.width,
                    (sortable && col.sortable !== false) && 'cursor-pointer select-none',
                    variantStyles.th
                  )}
                  onClick={() => (sortable && col.sortable !== false) && requestSort(col.accessor)}
                  aria-sort={
                    sortConfig.key === col.accessor
                      ? sortConfig.direction === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  <div className="flex items-center gap-1">
                    <span>{col.header}</span>
                    {sortable && col.sortable !== false && (
                      <div className="flex flex-col">
                        {sortConfig.key === col.accessor && sortConfig.direction === 'asc' ? (
                          <CaretUp className="h-3 w-3" weight="fill" />
                        ) : sortConfig.key === col.accessor && sortConfig.direction === 'desc' ? (
                          <CaretDown className="h-3 w-3" weight="fill" />
                        ) : (
                          <div className="h-3 w-3 text-slate-300 dark:text-slate-600">
                            <CaretUp className="h-2 w-2 -mb-0.5" />
                            <CaretDown className="h-2 w-2 -mt-0.5" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={cn(
            variantStyles.tbody
          )}>
            {paginatedData.length > 0 ? (
              paginatedData.map(row => (
                <tr
                  key={row.id}
                  className={cn(
                    "hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors",
                    selectedRows.has(row.id) && "bg-indigo-50 dark:bg-indigo-950/30",
                    variantStyles.tr
                  )}
                >
                  {selectable && (
                    <td className={cn(
                      sizeMap[size].td,
                      variantStyles.td
                    )}>
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => toggleRowSelection(row.id)}
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded"
                          aria-label={selectedRows.has(row.id) ? `Deselect row ${row.id}` : `Select row ${row.id}`}
                        >
                          {selectedRows.has(row.id) ? (
                            <CheckSquare className={cn(sizeMap[size].checkbox, "text-indigo-600 dark:text-indigo-400")} weight="fill" />
                          ) : (
                            <Square className={cn(sizeMap[size].checkbox, "text-slate-400 dark:text-slate-500")} />
                          )}
                        </button>
                      </div>
                    </td>
                  )}
                  {columns.map(col => (
                    <td
                      key={String(col.accessor)}
                      className={cn(
                        sizeMap[size].td,
                        col.align === 'center' && 'text-center',
                        col.align === 'right' && 'text-right',
                        tokens.light.text.primary,
                        'dark:text-slate-300',
                        variantStyles.td
                      )}
                    >
                      {col.cell ? col.cell(row) : String(row[col.accessor])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className={cn(
                    "text-center py-6",
                    tokens.light.text.muted,
                    'dark:text-slate-400'
                  )}
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className={cn(
            "text-sm",
            tokens.light.text.muted,
            'dark:text-slate-400'
          )}>
            Showing {((currentPage - 1) * pageSize) + 1}-{Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-md",
                tokens.light.border.default,
                'dark:border-slate-700',
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-50 dark:hover:bg-slate-800"
              )}
              aria-label="Previous page"
            >
              <CaretLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
                  // Show first page, last page, current page, and pages around current page
                  return (
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1
                  )
                })
                .map((page, i, array) => (
                  <React.Fragment key={page}>
                    {i > 0 && array[i - 1] !== page - 1 && (
                      <span className="px-2 text-slate-400 dark:text-slate-600">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={cn(
                        "min-w-[32px] h-8 px-2 rounded-md",
                        currentPage === page
                          ? cn("bg-indigo-600 text-white", "dark:bg-indigo-500")
                          : cn(
                              tokens.light.border.default,
                              'dark:border-slate-700',
                              "hover:bg-slate-50 dark:hover:bg-slate-800"
                            )
                      )}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                ))}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-md",
                tokens.light.border.default,
                'dark:border-slate-700',
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-50 dark:hover:bg-slate-800"
              )}
              aria-label="Next page"
            >
              <CaretRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
