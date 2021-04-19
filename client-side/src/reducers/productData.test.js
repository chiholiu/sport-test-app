import productData from "./productData";

describe("productData reducer", () => {
  it("should return the initial state", () => {
    expect(productData(undefined, {})).toEqual({
      products: [],
      searchText: "",
      productId: []
    });
  });
});
