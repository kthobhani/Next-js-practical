// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   ListItemText,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@mui/material";
// import axios from "axios";
// import { setCountry } from "@/redux/features/countrySlice";

// const Home = () => {
//   const dispatch = useDispatch();
//   const [gridData, setGridData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const selectedCountry = useSelector((state) => state.country.selectedCountry); // Get selected country from Redux store
//   const [countryFilter, setCountryFilter] = useState(
//     selectedCountry ? selectedCountry : "United States"
//   );
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10); // Set initial pageSize to 10

//   useEffect(() => {
//     // Fetch data from the API using Axios
//     axios
//       .get(`http://universities.hipolabs.com/search?country=${countryFilter}`)
//       .then((response) => {
//         setGridData(response.data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [countryFilter]);

//   useEffect(() => {
//     setFilteredData(gridData.slice((page - 1) * pageSize, page * pageSize));
//   }, [gridData, page, pageSize]);

//   const handleCountryChange = (newCountry) => {
//     setCountryFilter(newCountry);
//     // Dispatch the setCountry action to update the country in the Redux store
//     dispatch(setCountry(newCountry));
//     setPage(1);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage + 1);
//   };
//   return (
//     <div className="flex-1 p-4">
//       <div className="mb-4">
//         <label
//           htmlFor="countryFilter"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Select Country:
//         </label>
//         <select
//           id="countryFilter"
//           value={countryFilter}
//           onChange={(e) => handleCountryChange(e.target.value)}
//           className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           <option value="United States" className="text-gray-800">
//             United States
//           </option>
//           <option value="United Kingdom" className="text-gray-800">
//             United Kingdom
//           </option>
//           <option value="Australia" className="text-gray-800">
//             Australia
//           </option>
//           <option value="India" className="text-gray-800">
//             India
//           </option>
//           {/* Add more countries as needed */}
//         </select>
//       </div>

//       <div className="w-full  h-[calc(100vh-18.4rem)]">
//         <div className="border overflow-auto border-light-gray rounded-lg max-h-[calc(100vh-18.4rem)]">
//           <Table className="w-full">
//             <TableHead className="bg-gray-400 ">
//               <TableRow className="text-gray-800">
//                 <TableCell className="p-4 sticky top-0 bg-gray-400">
//                   <div className="flex">
//                     <ListItemText className="font-semibold text-lg">
//                       Name
//                     </ListItemText>
//                   </div>
//                 </TableCell>
//                 <TableCell className="p-4 sticky top-0 bg-gray-400">
//                   <div className="flex">
//                     <ListItemText className="font-semibold text-lg">
//                       Country
//                     </ListItemText>
//                   </div>
//                 </TableCell>
//                 <TableCell className="p-4 sticky top-0 bg-gray-400">
//                   <div className="flex">
//                     <ListItemText className="font-semibold text-lg">
//                       Alpha Two Code
//                     </ListItemText>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {gridData
//                 ? filteredData.map((data, index) => (
//                     <TableRow
//                       key={index}
//                       className="border-b border-light-gray"
//                     >
//                       <TableCell className="p-4 pl-8">
//                         {data?.name ? data?.name : "-"}
//                       </TableCell>

//                       <TableCell className="p-4 pl-8">
//                         {data?.country ? data?.country : "-"}
//                       </TableCell>
//                       <TableCell className="p-4 pl-8">
//                         {data?.alpha_two_code ? data?.alpha_two_code : "-"}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : ""}
//             </TableBody>
//           </Table>
//         </div>
//         <TablePagination
//           rowsPerPageOptions={[10]}
//           component="div"
//           count={gridData.length}
//           rowsPerPage={pageSize}
//           page={page - 1}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={(event) => {
//             setPageSize(parseInt(event.target.value, 10));
//             setPage(1);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCountry } from "@/redux/features/countrySlice";

import {
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const Home = () => {
  // Redux setup
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.country.selectedCountry);

  // Local state
  const [gridData, setGridData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [countryFilter, setCountryFilter] = useState(
    selectedCountry ? selectedCountry : "United States"
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Fetch data from the API based on the selected country
  useEffect(() => {
    axios
      .get(`http://universities.hipolabs.com/search?country=${countryFilter}`)
      .then((response) => {
        setGridData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [countryFilter]);

  // Update filtered data based on page and pageSize
  useEffect(() => {
    setFilteredData(gridData.slice((page - 1) * pageSize, page * pageSize));
  }, [gridData, page, pageSize]);

  /**
   * Handle country selection change
   * @param {*} newCountry
   */
  const handleCountryChange = (newCountry) => {
    setCountryFilter(newCountry);
    // Update selected country in Redux store
    dispatch(setCountry(newCountry));
    // Reset page when country changes
    setPage(1);
  };

  /**
   * Handle page change in pagination
   * @param {*} event
   * @param {*} newPage
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  return (
    <div className="flex-1 p-4">
      {/* Country filter dropdown */}
      <div className="mb-4">
        <label
          htmlFor="countryFilter"
          className="block text-sm font-medium text-gray-700"
        >
          Select Country:
        </label>
        <select
          id="countryFilter"
          value={countryFilter}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {/* List of countries */}
          {["United States", "United Kingdom", "Australia", "India"].map(
            (country) => (
              <option key={country} value={country} className="text-gray-800">
                {country}
              </option>
            )
          )}
        </select>
      </div>

      {/* Table displaying university data */}
      <div className="w-full  h-[calc(100vh-18.4rem)]">
        <div className="border overflow-auto border-light-gray rounded-lg max-h-[calc(100vh-18.4rem)]">
          <Table className="w-full">
            {/* Table header */}
            <TableHead className="bg-gray-400 ">
              <TableRow className="text-gray-800">
                <TableCell className="p-4 sticky top-0 bg-gray-400">
                  <div className="flex">
                    <ListItemText className="font-semibold text-lg">
                      Name
                    </ListItemText>
                  </div>
                </TableCell>
                <TableCell className="p-4 sticky top-0 bg-gray-400">
                  <div className="flex">
                    <ListItemText className="font-semibold text-lg">
                      Country
                    </ListItemText>
                  </div>
                </TableCell>
                <TableCell className="p-4 sticky top-0 bg-gray-400">
                  <div className="flex">
                    <ListItemText className="font-semibold text-lg">
                      Alpha Two Code
                    </ListItemText>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* Table body */}
            <TableBody>
              {gridData
                ? filteredData.map((data, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-light-gray"
                    >
                      <TableCell className="p-4 pl-8">
                        {data?.name || "-"}
                      </TableCell>
                      <TableCell className="p-4 pl-8">
                        {data?.country || "-"}
                      </TableCell>
                      <TableCell className="p-4 pl-8">
                        {data?.alpha_two_code || "-"}
                      </TableCell>
                    </TableRow>
                  ))
                : ""}
            </TableBody>
          </Table>
        </div>
        {/* Table pagination */}
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={gridData.length}
          rowsPerPage={pageSize}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 10));
            setPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
