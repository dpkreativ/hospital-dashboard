import DownloadIcon from "../icons/DownloadIcon";

const LabResultsList = ({ labResults }: { labResults: Array<string> }) => {
  const results = labResults.map((result, index) => {
    return { result, isActive: index === 1 ? true : false };
  });

  return (
    <ul
      role="list"
      className="px-5 rounded-3xl bg-white divide-y divide-gray-100 pb-4"
    >
      <li className="flex justify-between items-center gap-x-6 p-5">
        <h2 className="text-2xl font-medium">Lab Results</h2>
      </li>
      {results.map((result, index) => {
        return (
          <li
            key={index}
            className={
              result.isActive
                ? "flex justify-between gap-x-6 p-5 items-center bg-gray-100 rounded-3xl"
                : "flex justify-between gap-x-6 p-5 items-center"
            }
          >
            <a href="/somatosensory.pdf" className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font=light leading-6 text-gray-900">
                  {result.result}
                </p>
              </div>
            </a>
            <a
              href="/somatosensory.pdf"
              className="shrink-0 sm:flex sm:flex-col sm:items-center hover:bg-red-200 p-4 rounded-full"
            >
              <DownloadIcon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LabResultsList;
