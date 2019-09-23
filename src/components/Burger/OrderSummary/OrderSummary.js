import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class orderSummary extends React.Component {
    // This could be a fucntional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey =>
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);

        return (
            <Aux>
                <h3>Your Order</h3>
                <p> A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.puchasedCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.puchaseContinued}>CONTINUE</Button>
            </Aux>

        )

    }

};

export default orderSummary;