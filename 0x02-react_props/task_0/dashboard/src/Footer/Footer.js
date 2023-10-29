import React from 'react';
import { getFooterCopy, getFullYear } from '../../utils/utils';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
        <hr />
        <p>Copyright {getFullYear()} - {getFooterCopy(Math.random() < 0.5)}</p>
    </footer>
  )
}
