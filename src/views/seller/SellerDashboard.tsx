import { BsCurrencyDollar } from "react-icons/bs";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const SellerDashboard = () => {
  const chartData = {
    series: [
      {
        name: "Orders",
        data: [55, 44, 22, 44, 66, 99, 88],
      },
      {
        name: "Revenue",
        data: [77, 99, 66, 33, 22, 11, 44],
      },
      {
        name: "Sales",
        data: [12, 45, 89, 63, 21, 45, 85],
      },
    ],
    options: {
      color: ["red", "blue"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "white",
      },
      dataLabels: {
        enabled: false,
      },
      strock: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "white",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
          },
          chart: {
            height: 550,
          },
        },
      ],
    },
  };

  return (
    <div className=" px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-7 ">
        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">$235</h2>
            <span className="text-md font-medium">Total Sale</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-red-500 flex justify-center items-center text-xl">
            <BsCurrencyDollar color="white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">40</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-purple-500 flex justify-center items-center text-xl">
            <FaShoppingCart color="white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">20</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-green-500 flex justify-center items-center text-xl">
            <FaCartShopping color="white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">5</h2>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-blue-500 flex justify-center items-center text-xl">
            <MdShoppingCartCheckout color="white" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7 ">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full   bg-slate-400 p-4 rounded-md">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0 ">
          <div className="w-full bg-slate-400 p-4 rounded-md text-slate-900">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg pb-3 text-white">
                Recent Customer Message
              </h2>
              <Link className="font-semibold text-sm text-white">View All</Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-white ">
              <ol className="relative border-1 border-slate-600 ml-4 ">
                {/* one */}
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1.5 bg-slate-400 text-white rounded-full z10 ">
                    <img
                      src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
                      alt=""
                      className="w-full rounded-full h-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal ">Seller</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 Days Ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal rounded-lg border border-slate-800 bg-slate-700">
                      How Are You?
                    </div>
                  </div>
                </li>
                {/* one */}

                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1.5 bg-slate-400 text-white rounded-full z10 ">
                    <img
                      src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
                      alt=""
                      className="w-full rounded-full h-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal ">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 Days Ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal rounded-lg border border-slate-800 bg-slate-700">
                      How Are You?
                    </div>
                  </div>
                </li>
                {/* one */}

                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1.5 bg-slate-400 text-white rounded-full z10 ">
                    <img
                      src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
                      alt=""
                      className="w-full rounded-full h-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal ">Customer</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 Days Ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal rounded-lg border border-slate-800 bg-slate-700">
                      How Are You?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-slate-600 rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-white pb-3">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-white ">View All</Link>
        </div>

        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left text-white">
            <thead className="text-sm text-white uppercase border-b bg-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Active
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  #46224
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  $45
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  View
                </td>
              </tr>

              <tr>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  #46224
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  $45
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  View
                </td>
              </tr>

              <tr>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  #46224
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  $45
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  View
                </td>
              </tr>

              <tr>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  #46224
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  $45
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  Pending
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap"
                >
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
