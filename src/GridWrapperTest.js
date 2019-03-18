import React, { Component } from 'react';
import {GridWrapper,Row,Fieldset} from './gridwrapper'
import  {Input} from 'antd'

const Button=(
    <button>123</button>
)

class GridWrapperTest extends Component {
    render() {
        return (
            <div>
                <GridWrapper legend="Add to inventory">
                {/* grid-template-columns对列宽进行定义 ,下面是分为三列,每列设置百分比*/}
                    <Row span={"33.33% 33.333% 33.333%"}>
                        <Fieldset>                                
                            <label>Tags</label>                                                                                                                                                                                                                                                                                                                                                                         
                            <input type="text"/>
                        </Fieldset>
                        <Fieldset>
                            <label>Tagsjkh666666666</label>
                            <Input type="text"/>
                        </Fieldset>
                        <Fieldset>
                            <label>Tags</label>
                            <Input type="text"/>
                        </Fieldset>
                    </Row>
                    <Row span={"33.33% 33.333% 33.333%"}>
                        <Fieldset>                                
                            <label>Tags</label>                                                                                                                                                                                                                                                                                                                                                                         
                            <input type="text"/>
                        </Fieldset>
                        <Fieldset>
                            <label>Tagsjkh666666666</label>
                            <Input type="text"/>
                        </Fieldset>
                        <Fieldset>
                            <label>Tags</label>
                            <Input type="text"/>
                        </Fieldset>
                    </Row>
                </GridWrapper>
            </div>
        );
    }
}

export default GridWrapperTest;