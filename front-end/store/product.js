import { create } from "zustand";

//global state for products
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  //create products
  createProducts: async (newProduct) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();

    // Access the previous state correctly
    set((state) => ({
      products: [...state.products, data.data],
    }));

    return { success: true, message: "Product created" };
  },

  //get the products
  fetchProducts: async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      //console.log("data", data);
      set({ products: data });
    } catch (error) {
      console.log("error", error);
    }
  },

  //delete the products
  deleteProduct: async (_id) => {
    try {
      console.log("delete id ", _id);
      const response = await fetch(`/api/products/${_id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      console.log("data", data);

      //this state change update the UI after deleting the product
      set((state) => ({
        products: state.products.filter((product) => product._id !== _id),
      }));

      return { success: true, message: "Product deleted" };
    } catch (error) {
      console.log("error", error);
    }
  },

  //update the products
  updateProduct: async (product) => {
    try {
      const response = await fetch(`/api/products/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      console.log("data", data);

      //this state change update the UI after updating the product
      set((state) => ({
        products: state.products.map((p) =>
          p._id === product._id ? { ...p, ...product } : p
        ),
      }));

      return { success: true, message: "Product updated" };
    } catch (error) {
      console.log("error", error);
    }
  },
}));
