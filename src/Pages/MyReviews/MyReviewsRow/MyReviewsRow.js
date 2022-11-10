import React from "react";

const MyReviewsRow = ({ review }) => {
  const { serviceImg, serviceName, message } = review;

  const handleDelete = (id) => {};
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-ghost"
              >
                X
              </button>
            </div>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{message}</p>
        </td>
      </tr>
    </div>
  );
};

export default MyReviewsRow;
