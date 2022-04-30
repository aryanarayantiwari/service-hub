import AppContext from "../../AppContext";
import { useContext } from "react";
import IsSigned from "../IsSigned";
import { useNavigate } from "react-router-dom";
import FirestoreContext from "../../FirestoreContext";
function BookService({ service }) {
  const { isSignedIn } = useContext(AppContext);
  const { addBooking } = useContext(FirestoreContext);
  const navigate = useNavigate();
  const {
    setService,
    setBookingDate,
    setBookingTime,
    setAddress,
    setPaymentMethod,
  } = useContext(AppContext);
  setService(service);
  const d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let todaysdate = `2022-${
    month < 10 ? "0" + month.toString() : date.toString()
  }-${date < 10 ? "0" + date.toString() : date.toString()}`;
  let tomorrowsdate = `2022-${
    month < 10 ? "0" + month.toString() : date.toString()
  }-${date < 10 ? "0" + (date + 1).toString() : (date + 1).toString()}`;

  const handleChange = (e) => {
    setBookingTime(e.currentTarget.value);
  };
  const handleDate = (e) => {
    setBookingDate(e.target.value);
  };
  const handlePayment = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking();
    navigate("/bookconfirm");
  };
  if (isSignedIn) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          {/* Select Address */}
          <div className="px-2 py-2 flex items-center justify-start space-x-5">
            <label htmlFor="address" className="text-sm font-semibold">
              Enter Address
            </label>
            <textarea
              className="border outline-none border-black"
              onChange={handleAddress}
              required
            ></textarea>
          </div>
          {/* Select Date and Time*/}
          <div className="flex flex-col mx-2">
            <p className="font-bold py-1">When would you like your service?</p>
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                className="border-2 border-collapse border-gray-700 px-2 py-1 rounded-md"
                onChange={handleDate}
                max={`${tomorrowsdate}`}
                min={`${todaysdate}`}
                required
              />
            </label>
            <p className="font-bold py-1">
              At what time should the professional arrive?
            </p>
            <ul className="flex space-x-4">
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="num1"
                  name="time"
                  value="11:00 AM"
                  onChange={handleChange}
                  className="radio"
                />
                <label htmlFor="num1" className="text-sm">
                  11:00 AM
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="num2"
                  name="time"
                  value="12:00 PM"
                  onChange={handleChange}
                  className="radio"
                />
                <label htmlFor="num2" className="text-sm">
                  12:00 PM
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="num3"
                  name="time"
                  value="5:00 PM"
                  onChange={handleChange}
                  className="radio"
                />
                <label htmlFor="num3" className="text-sm">
                  05:00 PM
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="num4"
                  name="time"
                  value="7:00 PM"
                  onChange={handleChange}
                  className="radio"
                />
                <label htmlFor="num4" className="text-sm">
                  07:00 PM
                </label>
              </li>
            </ul>
          </div>
          {/* Select Payment Method */}
          <div className="text-2xl mx-2">
            <p className="font-bold text-base">Select Payment Method</p>
            <div className=" px-2 border-b-2 ">
              <input
                type="radio"
                name="payment"
                value="Cash"
                onChange={handlePayment}
              />
              <label className="text-base font-semibold ml-1 mt-1">
                Cash after service
              </label>
              <br />
              <input
                type="radio"
                name="payment"
                value="Credit Card"
                onChange={handlePayment}
              />
              <label className="text-base font-semibold ml-1 mt-1">
                Credit Card
              </label>
              <br />
              <input
                type="radio"
                name="payment"
                value="Debit Card"
                onChange={handlePayment}
              />
              <label className="text-base font-semibold ml-1 mt-1">
                Debit Card
              </label>
              <br />
              <input
                type="radio"
                name="payment"
                value="Netbanking"
                onChange={handlePayment}
              />
              <label className="text-base font-semibold ml-1 mt-1">
                Netbanking
              </label>
              <br />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-indigo-500  w-24  py-2 mx-4 my-2 border rounded hover:bg-blue-400 text-center text-white font-semibold cursor-pointer"
            >
              Book
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return <IsSigned />;
  }
}

export default BookService;
