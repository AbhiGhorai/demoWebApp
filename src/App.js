import "./App.css";
import CheckoutItems from "./components/CheckoutItems";
import CheckoutUserDetails from "./components/CheckoutUserDetails";
import Header from "./components/Header";

const data = [
  {
    name: "Shoes",
    price: 50,
    quantity: 3,
    image: "https://source.unsplash.com/100x100/?shoes",
  },
  {
    name: "Food",
    price: 20,
    quantity: 2,
    image: "https://source.unsplash.com/100x100/?food",
  },
  {
    name: "Pen",
    price: 5,
    quantity: 1,
    image: "https://source.unsplash.com/100x100/?pen",
  },
];

function App() {
  return (
    <>
      <div class={"bg-primary "}>
        <Header />
      </div>
      <div class="d-flex justify-content-center">
        <div class="p-3">
          <h4 class="textFont pb-30"> Checkout</h4>
          <div class="card shadow rounded border-bottom w-auto">
            <CheckoutUserDetails />
          </div>
        </div>
        <div class="p-3">
          <p1>Cart</p1>
          <div class="card">
            <div class="card-body">
              <CheckoutItems itemData={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
