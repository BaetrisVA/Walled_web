import { info } from "autoprefixer";
import { useEffect, useState } from "react";

function TableComponent() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3000/transactions";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setTransactions(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <table className="table-auto text-black mt-5 w-full mb-5 border-collapse border-gray-200">
      <thead className="border-2 border-gray-200 text-left font-bold border-collapse text-[14px]">
        <tr>
          <th className="border-2 border-gray-200 px-4 py-3 text-left">
            Date & Time
          </th>
          <th className="border-2 border-gray-200 px-4 py-2 text-left">Type</th>
          <th className="border-2 border-gray-200 px-4 py-2 text-left">
            From/To
          </th>
          <th className="border-2 border-gray-200 px-4 py-2 text-left">
            Description
          </th>
          <th className="border-2 border-gray-200 px-4 py-2 text-left">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item) => {
          return (
            <tr className="border-collapse border-2 border-gray-200 even:bg-white odd:bg-gray-100 text-xs">
              <td className="border-2 border-gray-200 px-4 py-0.5 text-left">
                {item.dateTime}
              </td>
              <td className="border-2 border-gray-200 px-4 text-left">
                {item.type}
              </td>
              <td className="border-2 border-gray-200 px-4 text-left">
                {item.fromTo}
              </td>
              <td className="border-2 border-gray-200 px-4 text-left">
                {item.description}
              </td>
              <td
                className={`border-2 border-gray-200 px-4 text-left
                                ${
                                  item.type == "CREDIT"
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
              >
                {item.type == "CREDIT"
                  ? `1+Rp${item?.amount?.toLocaleString("id-ID")},00`
                  : `-Rp${item?.amount?.toLocaleString("id-ID")},00`}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableComponent;
