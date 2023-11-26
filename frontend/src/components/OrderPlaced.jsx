import {totalCost} from "../pages/OrderPage"

const OrderPlaced = () => {
  return (
    <div className="bg-[#F2F2F2] rounded-lg border border-[#D9D9D9] w-[313px] h-[172px] p-5 text-sm space-y-2 shadow-xl">
      <p >Order has been placed successfully.
        <br />
        Confirmation message sent!
      </p>
      <p>
        <span className="font-bold">Order Id: </span>
        3267
      </p>
      <p className="pb-1"><span className="font-bold">Total: ₹</span>
      {Math.ceil(totalCost)}
      </p>
        <button className="bg-[#C4C4C4] w-[102px] h-[25px] font-bold shadow-xl float-right" onClick={() => window.location.reload()}>Back</button>

    </div>
  )
}

export default OrderPlaced