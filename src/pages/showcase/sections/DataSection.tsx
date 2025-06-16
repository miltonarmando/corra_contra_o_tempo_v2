import { motion } from 'framer-motion'
import { Table, type TableColumn } from '@/components/ui/Table'
import { Accordion } from '@/components/ui/Accordion'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { SectionProps } from './types'

interface TableRow {
  id: string
  name: string
  email: string
  status: 'Active' | 'Inactive'
  role: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

const tableData: TableRow[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', role: 'Editor' }
]

const tableColumns: TableColumn<TableRow>[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { 
    header: 'Status', 
    accessor: 'status',
    cell: (row: TableRow) => (
      <Badge variant={row.status === 'Active' ? 'success' : 'error'}>
        {row.status}
      </Badge>
    )
  },
  { header: 'Role', accessor: 'role' }
]

export function DataSection({ theme }: SectionProps) {
  return (
    <div className="space-y-8">
      <motion.div variants={itemVariants}>        <h2 className={cn("text-2xl font-bold mb-4", tokens[theme].text.primary)}>
          Table
        </h2>
        <Table
          columns={tableColumns}
          data={tableData}
          pageSize={3}
        />
      </motion.div>

      <motion.div variants={itemVariants}>        <h2 className={cn("text-2xl font-bold mb-4", tokens[theme].text.primary)}>
          Accordion
        </h2>
        <Accordion
          items={[
            {
              id: "item-1",
              title: "Is it accessible?",
              content: "Yes. It adheres to the WAI-ARIA design pattern."
            },
            {
              id: "item-2",
              title: "Is it styled?",
              content: "Yes. It comes with default styles that match your theme."
            },
            {
              id: "item-3",
              title: "Is it animated?",
              content: "Yes. It's animated by default, but you can disable it if you prefer."
            }
          ]}
        />
      </motion.div>
    </div>
  )
}