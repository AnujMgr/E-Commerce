import React, { useEffect, useState } from "react";
import Api from "../../../helper/api";
import Loading from "../Loading";
import {
  StyleNavItem,
  StyleNavTabsContainer,
  StyleNavsContainer,
  StyleTabsContainer,
} from "./NavTabsStyle";

function NavTabs({ data }) {
  const [slug, setSlug] = useState(data[0].slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = new Api();

  useEffect(() => {
    const fetchProducts = async (slug, page, limit) => {
      api
        .getProductByCategory(slug, page, limit)
        .then((response) => {
          setProducts(response.data);
          console.log(slug);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchProducts(slug, 1, 4);
  }, [slug]);

  return (
    <StyleNavTabsContainer>
      <h1>Featured Products Section</h1>
      <StyleNavsContainer>
        {data.map((item) => (
          <StyleNavItem key={item.id} onClick={(e) => setSlug(item.slug)}>
            {item.name}
          </StyleNavItem>
        ))}
      </StyleNavsContainer>
      {!loading ? (
        <StyleTabsContainer>
          {products.map((product) => {
            return (
              <div>
                <img src={product.image} />
                <h3>{product.name}</h3>
                <p>$ {product.price}</p>
              </div>
            );
          })}
        </StyleTabsContainer>
      ) : (
        <Loading />
      )}
    </StyleNavTabsContainer>
  );
}

export default NavTabs;
