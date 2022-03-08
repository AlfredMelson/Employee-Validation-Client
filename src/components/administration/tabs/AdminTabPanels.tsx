import { AnimatePresence } from 'framer-motion'
import { TabPanelWrapper } from '../../mui'
import { RegistrantList } from '../panels'

// interface PanelProps {
//   index: number
//   value: number
//   children: ReactNode
// }

// function Panel({ children, value, index }: PanelProps) {
//   return (
//     <Box
//       component='div'
//       role='panel'
//       hidden={value !== index}
//       id={`select-panel-${index}`}
//       aria-labelledby={`select-tab-${index}`}>
//       {value === index && children}
//     </Box>
//   )
// }

export default function AdminTabPanels() {
  // const paginatedEmpl = useRecoilValue(paginatedEmplAtom)

  // const filteredEmails = EmplEmailFilters(paginatedEmpl)

  // const selectedTab = useRecoilValue(selectedTabAtom)

  // const PanelData: IPanelData[] = [
  //   { index: 0, employees: filteredEmails.all },
  //   { index: 1, employees: filteredEmails.invalid },
  //   { index: 2, employees: filteredEmails.duplicate },
  //   { index: 3, employees: filteredEmails.old }
  // ]

  return (
    <TabPanelWrapper>
      <AnimatePresence>
        <RegistrantList />
      </AnimatePresence>
    </TabPanelWrapper>
  )
}
