import React from "react";
import { 
    StyleCounter, 
    StyleCounterContainer, 
    StyleCounterBtn 
} from "./StyleCounter";
import { AppConsumer } from "../../context";

const Counter = (props) => {

    const { id, noOfOrder } = props;
  	return (
    	<React.Fragment>
            <StyleCounterContainer>
                <StyleCounter>
                    <AppConsumer>
                        {context => {
                            return(
                            <React.Fragment>
                                <StyleCounterBtn onClick = {() => context.handleOrderDecrement(id, noOfOrder)}> - </StyleCounterBtn>
                                    <p>{ noOfOrder }</p>
                                <StyleCounterBtn onClick = {() => context.handleOrderIncrement(id, noOfOrder)}> + </StyleCounterBtn>
                            </React.Fragment>
                            )
                        }}
                    </AppConsumer>

                </StyleCounter>
            </StyleCounterContainer>
    	</React.Fragment>
  	);
};

export default Counter;
 