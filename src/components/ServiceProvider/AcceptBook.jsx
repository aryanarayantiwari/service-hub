import { InformationCircleIcon } from "@heroicons/react/solid";
function AcceptBook() {
  return (
    <div className="m-2 border-2 border-gray-500 px-2 rounded-lg py-1 font-semibold">
      <h2 className="text-xl border-b-2">Plumber</h2>
      <div className="flex items-center">
        <InformationCircleIcon className="w-5 h-5 text-green-500" />
        <h3 className="text-green-500">Booking Information</h3>
      </div>
      <p className="text-sm text-gray-500">Scheuled Date and Time</p>
      <h4>9:00 am on sun, 30th Dec</h4>
      <div className="flex text-sm items-center justify-start space-x-2">
        <p className="text-gray-500">Address -</p>
        <p className="">SVVV, Indore</p>
        </div>
    </div>
  );
}

export default AcceptBook;
