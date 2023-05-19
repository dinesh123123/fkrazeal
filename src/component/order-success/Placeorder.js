import React from 'react'

function Placeorder() {
  return (
    <div>
    <h1>CCAvenue Payment Gateway Intgration</h1>
    <div id="ccav-payment-form">
      <form name="frmPayment" action="ccavRequestHandler.php" method="POST">
        <input type="hidden" name="merchant_id" defaultValue="<?php echo CCA_MERCHANT_ID; ?>" /> 
        <input type="hidden" name="language" defaultValue="EN" /> 
        <input type="hidden" name="amount" defaultValue={1} />
        <input type="hidden" name="currency" defaultValue="INR" /> 
        <input type="hidden" name="redirect_url" defaultValue="http://youdomain.com/payment-response.php" /> 
        <input type="hidden" name="cancel_url" defaultValue="http://youdomain.com/payment-cancel.php" /> 
        <div>
          <input type="text" name="billing_name" defaultValue className="form-field" placeholder="Billing Name" /> 
          <input type="text" name="billing_address" defaultValue className="form-field" placeholder="Billing Address" />
        </div>
        <div>
          <input type="text" name="billing_state" defaultValue className="form-field" placeholder="State" /> 
          <input type="text" name="billing_zip" defaultValue className="form-field" placeholder="Zipcode" />
        </div>
        <div>
          <input type="text" name="billing_country" defaultValue className="form-field" placeholder="Country" />
          <input type="text" name="billing_tel" defaultValue className="form-field" placeholder="Phone" />
        </div> 
        <div>
          <input type="text" name="billing_email" defaultValue className="form-field" placeholder="Email" />
        </div>
        <div>
          <button className="btn-payment" type="submit">Pay Now</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Placeorder
