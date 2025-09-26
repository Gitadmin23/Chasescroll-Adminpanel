import { usePagintion } from "@/helpers/store/usePagination";

export default function Pagination({
  totalElement
} : {
  totalElement?: string
 }) {
  const { page, totalpage, updatePage, pageSize } = usePagintion((state) => state);

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalpage) return;
    updatePage(newPage);
  };

  // Helper: generate page numbers with ellipses
  const getPageNumbers = () => {
    const delta = 2; // how many pages to show around current
    // const pages: (number | string)[] = [];

    // Always show first and last page
    const range = [];
    for (
      let i = Math.max(2, page - delta);
      i <= Math.min(totalpage - 1, page + delta);
      i++
    ) {
      range.push(i);
    }

    if (page - delta > 2) {
      range.unshift("...");
    }
    if (page + delta < totalpage - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalpage > 1) {
      range.push(totalpage);
    }

    return range;
  };

  return (
    <div className=" w-full py-3 flex flex-col gap-1 px-2 bg-white " > 
    <p>Showing {pageSize} items out of {totalElement} results found</p>
      <div className="flex items-center gap-2 mt-4">
        {/* Previous */}
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded-md cursor-pointer text-sm disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page numbers with ellipses */}
        {getPageNumbers().map((p, i) =>
          p === "..." ? (
            <span key={`ellipsis-${i}`} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => goToPage(p as number)}
              className={`px-3 py-1 border rounded-md cursor-pointer text-sm ${page === p ? "bg-blue-500 text-white" : ""
                }`}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalpage}
          className="px-3 py-1 border rounded-md text-sm cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
