import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "",
    postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Neha"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="laststName"
          id="lastName"
          placeholder="Sawant"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />


        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="neha48@gmail.com"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>


        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Pune"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="B-25C"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="415523"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <br />
        <fieldset>

          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label>Comments</label>
              <p>Get notified when someones posts a comment on a posting </p>
            </div>

          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label>Candidates</label>
              <p>Get notified when a candidate applies for a job. </p>
            </div>

          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label>Offers</label>
              <p>Get notified when candidates accepts or rejects an offer </p>
            </div>

          </div>
        </fieldset>
        <br />
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}

          />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}

          />
          <label htmlFor="pushEmail">Same as email</label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No push notifications "
            onChange={changeHandler}

          />
          <label htmlFor="pushNothing">No push notifications</label>

        </fieldset>

        <br />
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>

      </form>
    </div>
  );
}

export default App;
