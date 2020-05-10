/**
 *
 * Carrousel ficha-modelo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import {
  itemsliderDefaultShape,
  itemsliderShape,
} from '../../shapes/itemslider';

import StyledCarrousel from './StyledCarrousel';
import ItemCarrousel from '../ItemCarrousel';
import Img from '../Img';

import dots from '../../assets/img/dots.svg';
import flechader from '../../assets/img/flechader.svg';

function Carrousel({ restaurant }) {
  const { item_sliders } = restaurant;

    return (
    <>
    <StyledCarrousel />
        <div className="carr-wrapper">
            <div className="leftarrow">
                <Img src={flechader} />
            </div>
            <div className="rightarrow">
                <Img src={flechader} />
            </div>
            <Row>
                {item_sliders.map(item => (
                    <ItemCarrousel {...item} key={item.id} />
                ))}
            </Row>
            <Row>
                <div className="dots-wrapper">
                    <Img src={dots} />
                </div>
            </Row>
        </div>
    </>
    );
}

Carrousel.defaultProps = {
  ...itemsliderDefaultShape
};

Carrousel.propTypes = {
  ...itemsliderShape
};

export default Carrousel;









