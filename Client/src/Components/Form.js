import React from 'react'
import "./Form.css"
function Form() {
  return (
    <div>
        {/* here to write api endpoint */}
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter Product ID: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    {/* <label for="email">Enter your email: </label> */}
    {/* <input type="email" name="email" id="email" required /> */}
  </div>
  <div class="form-example">
    <input type="submit" value="Search" />
  </div>
</form>




    </div>
  )
}

export default Form