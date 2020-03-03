import React from "react";
import { Link } from "react-router-dom";

import {
	Card,
	BreadCrumb,
	Checkbox,
	SortOption,
} from "../../Modules";

import {
	StyleFilterContainer,
	StyleItemsContainer,
	StyleFilterTitle,
	StyleCategoryTitle ,
	StyleInputFilter
} from "./CategoryStyle";

import { AppConsumer } from "../../context";

const Categories = (props) => {
	const brands = [];
	const map = new Map();
	const { categorySlug } = props;

  	return ( 
      	<AppConsumer>
  			{context => {
            	const products = context.products.filter(product => product.category === categorySlug)
            	
  				for (const item of context.products) {
				    if(!map.has(item.brand)){
				        map.set(item.brand, true);    // set any value to Map
				        brands.push({
				            id: item.id,
				            name: item.brand,
				            star: item.star,
				            price: item.price,

				        });
				    }
				}

				return(
					<React.Fragment>
				  		<BreadCrumb>
				  			<Link to="/">
				  				Home
				  			</Link>
				  			<Link to = {"/Categories/"+categorySlug}>
				  				Electronics
				  			</Link>
				  		</BreadCrumb> 

				  		<div className = "flex-sb-wrap">
				  			<StyleFilterContainer>
					  			<div className="bottom-border">
					  				<h5 className="medium-text m-6-0 weight-300">FILTERS</h5>
								</div> 

				  				<StyleFilterTitle> BRAND </StyleFilterTitle>

				  				<div className="bottom-border p-b-10">
				  					{
					  					brands.map(brand => (
						  					<div key = { brand.id}> 
						  						<Checkbox 
						  							name = { brand.name } 
						  							brandId = { brand.id }
						  						/> 
						  						<span className="small-text black-light">{ brand.name }</span><br/>
						  					</div>
					  					))
					  				}
								</div>
								<div className="bottom-border p-b-10">
					  				<StyleFilterTitle >
					  					PRICE
					  				</StyleFilterTitle>
					  				<div className="flex">
										<StyleInputFilter placeholder="min"/> -
					  					<StyleInputFilter placeholder="max"/>
					  					<button className="btn-danger m-l-auto"> GO </button>
					  				</div>
					  				
					  			</div>
				  			</StyleFilterContainer>

				  			<StyleItemsContainer>
				  				<div className="flex-sb-wrap bottom-border">
									<div>
						  				<StyleCategoryTitle>
						  					SmartPhones / Mobiles  
						  				</StyleCategoryTitle>
					  					<p className="black-light small-text">{ products.length } items found in Mobiles</p>
					  				</div>
					  				<SortOption/>
				  				</div>
				  				
				  				<div className="flex-sb-wrap">
				  					{products.map(product => (
						                <Card key = { product.id } 
						                	onAddToCart = { context.handleAddToCart }
						                  	handleRating = { context.handleRating }
						                  	products = { product }
						                  	handleFilter = { context.handleFilter }
						                  	width = "24.5" 
						                /> 
						              ))}
				  				</div>
				  			</StyleItemsContainer>
				  		</div>
					</React.Fragment>
      			);
			}}
      	</AppConsumer>

  	);
};

export default Categories;
