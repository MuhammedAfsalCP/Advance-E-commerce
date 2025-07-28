import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpesificorder, getOrderid, updateStatus } from '../Redex/OrderSlice';
import { useLocation } from 'react-router-dom';


const SpecificOrderView = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const { spesificorder } = useSelector((state) => state.Order);
  const orderId = location.state || null;

  useEffect(() => {
    dispatch(fetchSpesificorder(orderId))
  }, [])
  const update = (order_id, method) => {
    // console.log(order_id)

    dispatch(updateStatus({ orderid: order_id, method: method }))

    setTimeout(() => {
      dispatch(fetchSpesificorder(orderId))
    }, 300);
  }
  console.log(spesificorder)
  return (
    <div className="w-full h-full p-6 flex flex-col">
      <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>

        {/* Order ID and Date */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Order ID</h3>
            <p>{spesificorder?.order_id}</p>
          </div>
          <div>
            <p> Ordered On: {new Date(spesificorder?.created_at).toLocaleString()}</p>
            {spesificorder?.updated_at ? (
              <p>Updated at: {new Date(spesificorder.updated_at).toLocaleString()}</p>
            ) : null}

          </div>
        </div>

        {/* Order Items */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Order Items</h3>
          {spesificorder?.orderitems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-gray-100 p-4 rounded-lg mb-4">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <img
                  src={item.product.image_url}
                  alt={item.product.Name}
                  className="w-30 h-40 object-cover rounded-md"
                />
              </div>

              <div className="w-full md:w-3/4 md:pl-6">
                <h4 className="text-lg font-bold">{item.product.Name}</h4>
                <p className="text-md text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-md text-gray-600">Price: ₹{item.product.Price}</p>
                <p className="text-md text-gray-600">Subtotal: ₹{item.item_subtotal}</p>
                <p className="text-md text-gray-600">Status: {item.status}</p>

                {/* Action Buttons */}
                <div className="mt-2 flex gap-3">
                  {/* Delivered Button */}
                  {item.status !== 'Delivered' && item.status !== 'Cancelled' && (
                    <button
                      className="px-4 py-1 rounded bg-green-500 text-white"
                      onClick={() => update(item.id, "Delivered")}
                    >
                      Mark as Delivered
                    </button>
                  )}

                  {/* Cancel Button */}
                  {item.status !== 'Shipped' && item.status !== 'Delivered' && item.status !== 'Cancelled' && (
                    <button
                      className="px-4 py-1 rounded bg-red-500 text-white"
                      onClick={() => update(item.id, "Shipped")}
                    >
                      Mark as Shipped
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Financial Summary */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Financial Summary</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-md text-gray-600">Total Price: ₹{spesificorder?.total_price}</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
          <p className="text-md text-gray-700">Name : {spesificorder?.address[0]}</p>
          <p className="text-md text-gray-700">E-mail : {spesificorder?.address[1]}</p>
          <p className="text-md text-gray-700">Address : {spesificorder?.address[2]}</p>
        </div>
      </div>
    </div>




  );
};

export default SpecificOrderView;
