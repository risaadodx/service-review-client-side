import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Authprovider/AuthProvider";
import MyReviewsRow from "./MyReviewsRow/MyReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-risaadodx.vercel.app/reviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {reviews.map((review) => (
              <MyReviewsRow key={review._id} review={review}></MyReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
