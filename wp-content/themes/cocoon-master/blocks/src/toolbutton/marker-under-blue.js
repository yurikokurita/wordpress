/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

import { THEME_NAME, MarkerToolbarButton } from '../helpers.js';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { Icon, minus } from '@wordpress/icons';
const FORMAT_TYPE_NAME = 'cocoon-blocks/marker-under-blue';
const TITLE = __( '青色アンダーラインマーカー', THEME_NAME );

registerFormatType( FORMAT_TYPE_NAME, {
  title: TITLE,
  tagName: 'span',
  className: 'marker-under-blue',
  edit({isActive, value, onChange}){
    // console.log(isActive);
    const onToggle = () => onChange(toggleFormat(value,{type:FORMAT_TYPE_NAME}));

    return (
      <Fragment>
        <MarkerToolbarButton
          icon={<Icon icon={minus} size={32} />}
          title={<span className="marker-under-blue">{TITLE}</span>}
          onClick={ onToggle }
          isActive={ isActive }
        />
      </Fragment>
    );
  }
} );
