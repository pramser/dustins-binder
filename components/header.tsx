// hero icons
import { FunnelIcon } from "@heroicons/react/24/solid"

type HeaderParams = {
  selectedSortName: string
  sortButtonOnClick: any
}

export default function Header({
  selectedSortName,
  sortButtonOnClick,
}: HeaderParams) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-900 flex flex-row px-4 py-2 items-center text-white w-fill">
      <FunnelIcon className="h-4 w-4" />
      &nbsp;
      <span className="cursor-default">{selectedSortName}</span>
      <button
        className="bg-indigo-900 hover:bg-blue-700 border border-white rounded-md ml-4 px-2 py-1"
        onClick={sortButtonOnClick}
      >
        sort
      </button>
    </header>
  )
}
