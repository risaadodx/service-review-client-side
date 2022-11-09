import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const email = form.email.value;
    const description = form.description.value;

    const service = {
      name,
      img,
      price,
      email,
      description,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Service Added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="mt-20 border p-20 rounded-lg mb-20"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full mb-5"
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Photo Url"
            className="input input-bordered w-full mb-5"
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full mb-5"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full mb-5"
            readOnly
          />
        </div>
        <div>
          <textarea
            name="description"
            className="textarea w-full mt-4 h-60 input-bordered"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          name=""
          id=""
          value="Add Service"
          className="btn hover:btn btn-success text-white w-full mt-5"
        />
      </form>
    </div>
  );
};

export default AddService;
