import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>A deliciuos burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        btnType="Danger"
        clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
}

export default OrderSummary;
