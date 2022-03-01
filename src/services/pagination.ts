/*
 * Paginate() accepts the following parameters:
 * totalEmpl (required) - the total number of items to be paged
 * selectedPage (optional) - the current active page; defaults to the first page
 * emplPerPage (optional) - the number of items per page; defaults to 10
 * maxPages (optional) - the maximum number of page navigation links to display; defaults to 10
 */
interface IPaginate {
  totalEmpl: number
  selectedPage: number
  emplPerPage: number
  maxPages: number
}

export function Paginate({ totalEmpl, selectedPage, emplPerPage, maxPages }: IPaginate) {
  // total number of pages calculated
  const totalPages = Math.ceil(totalEmpl / emplPerPage)

  // ensure current page isn't out of range
  if (selectedPage < 1) {
    selectedPage = 1
  } else if (selectedPage > totalPages) {
    selectedPage = totalPages
  }

  let startPage: number, endPage: number

  // if total pages are less than max pages show all pages
  if (totalPages <= maxPages) {
    startPage = 1
    endPage = totalPages
  } else {
    // total pages greater than max -> calculate start and end pages
    const maxPagesBeforeSelectedPage = Math.floor(maxPages / 2)
    const maxPagesAfterSelectedPage = Math.ceil(maxPages / 2) - 1
    if (selectedPage <= maxPagesBeforeSelectedPage) {
      // selected page near the start
      startPage = 1
      endPage = maxPages
    } else if (selectedPage + maxPagesAfterSelectedPage >= totalPages) {
      // selected page near the end
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    } else {
      // selected page somewhere in the middle
      startPage = selectedPage - maxPagesBeforeSelectedPage
      endPage = selectedPage + maxPagesAfterSelectedPage
    }
  }

  // determine the beginning and ending employee indexes
  const beginningIndex = (selectedPage - 1) * emplPerPage
  const endingIndex = Math.min(beginningIndex + emplPerPage - 1, totalEmpl - 1)

  // create an array of pages to ng-repeat in page control
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i)

  // return object with all page properties
  return {
    totalEmpl: totalEmpl,
    selectedPage: selectedPage,
    emplPerPage: emplPerPage,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    beginningIndex: beginningIndex,
    endingIndex: endingIndex,
    pages: pages
  }
}
