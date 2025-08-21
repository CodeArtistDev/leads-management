import React from "react";
import {
  Search,
  Filter,
  Layers,
  RefreshCw,
  SquareKanban,
  ArrowUp,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import profilePic from '../assets/dp.png'
const LeadsTable = ({ leads }) => {
  const getStatusColor = (status) => {
    const colors = {
      New: "bg-blue-100 text-blue-800",
      Contacted: "bg-yellow-100 text-yellow-800",
      Qualified: "bg-purple-100 text-purple-800",
      Working: "bg-orange-100 text-orange-800",
      "Proposal Sent": "bg-indigo-100 text-indigo-800",
      Customer: "bg-green-100 text-green-800",
      "Lost Leads": "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getTagColor = (tag) => {
    const colors = {
      Important: "bg-red-100 text-red-800",
      "Follow up": "bg-blue-100 text-blue-800",
      Review: "bg-gray-100 text-gray-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 m-1">
        <div className="flex flex-wrap items-center space-x-3">
          <button className="flex items-center font-semibold space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center font-semibold space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Layers className="w-4 h-4" />
            <span>Bulk Actions</span>
          </button>
          <button className="flex items-center font-semibold space-x-2 px-2 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden flex-1">
            <button className="pl-3 text-gray-500 flex items-center cursor-pointer">
              <Search className="w-5 h-5 " />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-2 py-2 ouline-none focus:outline-none "
            />
          </div>
          <button className="flex items-center font-semibold space-x-2 px-2 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <SquareKanban className="w-4 h-4" />
            <span>View</span>
          </button>
        </div>
      </div>
      {/* Table */}
{/* Desktop Table */}
      <div className="hidden md:block bg-white m-1 mt-4 rounded-lg border border-gray-200 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 ">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="flex items-center text-left py-3 px-4 text-sm font-medium text-gray-500">
                <input
                  type="checkbox"
                  className="h-4.5 w-4.5 text-blue-600 border border-gray-100 bg-gray-100 rounded me-2"
                />
                <span>Lead ID</span>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Customer
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Company
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Phone
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Value
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Tags
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Source
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Assigned
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="flex items-center text-left py-3 px-4 text-sm font-medium text-gray-500">
                Created <ArrowUp className="w-4 h-4 ms-1" />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="py-4 px-4 text-sm font-medium text-gray-900">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4.5 w-4.5 text-blue-600 border border-gray-100 bg-gray-100 rounded me-2"
                    />
                    <span className="font-bold">{lead.id}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm font-semibold text-blue-600">
                  {lead.customer}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {lead.company}
                </td>
                <td className="py-4 px-4 text-sm text-blue-600">
                  {lead.email}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {lead.phone}
                </td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900">
                  {lead.value}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex px-2 border py-1 text-xs font-medium rounded-full ${getTagColor(
                      lead.tag
                    )}`}
                  >
                    {lead.tag}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {lead.source}
                </td>
                <td className="py-4 px-4">
                  <img
                    src={profilePic}
                    alt="profile-pic"
                    className="w-6 h-6 rounded-full"
                  />
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs border font-medium rounded-full ${getStatusColor(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {lead.created}
                </td>
                <td className="px-4 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden space-y-3 m-1 mt-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="border rounded-lg p-4 shadow-sm bg-white space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">{lead.customer}</span>
              <span className="text-xs text-gray-500">{lead.created}</span>
            </div>
            <p className="text-sm text-gray-600">{lead.company}</p>
            <p className="text-sm text-gray-600">{lead.email}</p>
            <p className="text-sm text-gray-600">{lead.phone}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span
                className={`px-2 py-1 text-xs border rounded-full ${getTagColor(
                  lead.tag
                )}`}
              >
                {lead.tag}
              </span>
              <span
                className={`px-2 py-1 text-xs border rounded-full ${getStatusColor(
                  lead.status
                )}`}
              >
                {lead.status}
              </span>
              <span className="px-2 py-1 text-xs border rounded-full bg-gray-100 text-gray-700">
                {lead.value}
              </span>
            </div>
          </div>
        ))}
      </div>


      {/* Pagination */ }
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-6">
        <button className="flex items-center space-x-2 px-4 py-2 cursor-pointer border border-gray-300 rounded-lg hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4"/>
            <span className="font-medium">Previous</span>
        </button>

        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 bg-gray-200 rounded-lg text-sm font-medium">1</button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm font-medium">2</button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm font-medium">3</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm font-medium">8</button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm font-medium">9</button>
          <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm font-medium">10</button>
        </div>

        <button className="flex items-center space-x-2 px-4 py-2 cursor-pointer border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="font-medium">Next</span>
            <ChevronRight className="w-4 h-4"/>
        </button>
      </div>
    </>
  );
};

export default LeadsTable;
