```jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2f8c",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 349,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 249,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 499,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1614594575662-bc7c9c7e6d96",
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 399,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1620803366004-1196f7b8f3b5",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 279,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },

  // Succulents
  {
    id: 7,
    name: "Echeveria",
    price: 199,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 8,
    name: "Haworthia",
    price: 229,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 299,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
  {
    id: 10,
    name: "Zebra Haworthia",
    price: 249,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 399,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d7f1c6",
  },
  {
    id: 12,
    name: "Burro's Tail",
    price: 349,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Rose Plant",
    price: 399,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 14,
    name: "Hibiscus",
    price: 299,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
  },
  {
    id: 15,
    name: "Jasmine",
    price: 349,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
  },
  {
    id: 16,
    name: "Marigold",
    price: 199,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
  },
  {
    id: 17,
    name: "Geranium",
    price: 279,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a",
  },
  {
    id: 18,
    name: "Orchid",
    price: 499,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566907225474-4f6c8f5f5f1f",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((previousItems) => [
      ...previousItems,
      plant.id,
    ]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery 🌱</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      {/* Product Listing */}
      <main className="product-page">
        <h1>Our Plants</h1>

        <p className="intro">
          Discover beautiful and healthy plants for your home.
        </p>

        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section key={category} className="plant-category">
              <h2>{category}</h2>

              <div className="plant-grid">
                {categoryPlants.map((plant) => {
                  const isAdded = addedItems.includes(plant.id);

                  return (
                    <div className="plant-card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p className="price">
                        ₹{plant.price}
                      </p>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
```
