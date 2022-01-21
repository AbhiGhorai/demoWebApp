import React from "react";

export default function CheckoutUserDetails() {
  return (
    <div class="card-body">
      <form>
        <div class="mb-2">
          <label class="form-label textFont">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label textFont">Email</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-2">
          <label for="exampleInputPassword1" class="form-label textFont">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-2">
          <label class="form-label textFont"> Mobile number</label>
          <input type="number" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label textFont"> Address</label>
          <input type="text" class="form-control" />
        </div>
        <div class="d-flex mb-2">
          <div class="me-2">
            <label class="form-label textFont"> Country</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mx-2">
            <label class="form-label textFont"> City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="ms-2">
            <label class="form-label textFont"> Pincode</label>
            <input type="number" class="form-control" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
