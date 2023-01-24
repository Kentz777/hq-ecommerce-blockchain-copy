import "./products.css";

function Products() {
  return (
    <>
      <div className="navbar">
          <img src="hq-logo.jpg" className="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
            
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
		
<div className="products">

 



<div className="product_header">
<h1>Product List</h1>
<div className="filters">
<select name="cars" id="cars">
  <option value="">Filter 1</option>
  <option value="">Filter 2</option>
  <option value="">Filter 3</option>
  <option value="">Filter 4</option>
  
</select>
<input type="text" placeholder="Search.." />
</div>
</div>

<div className="row">

<div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>

 <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
       <img src="bricks.jpg" alt="Avatar" style={{width:"100%"}} />
	   <div className="product_description">
	   <h3>Product Name</h3>
	    <h5>Price: $2.00</h5>
		<h5>Items left: 2</h5>
		</div>
    </div>
  </div>
 
  
  
  
  
</div>


</div>
    </>
  );
}

export default Products;
