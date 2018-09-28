import './styles.css';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Window from '../src/window/index';
import Button from '../src/button/index';
import Alert from '../src/alert/index';
import AlertOverlay from '../src/alert-overlay/index';
import Confirm from '../src/confirm/index';
import ConfirmOverlay from '../src/confirm-overlay/index';
import DotPagination from '../src/dot-pagination/index';
import Overlay from '../src/overlay/index';
import LoadingImage from '../src/loading-image/index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button text="testsss" />
  ))
;

storiesOf('Window', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Window>Example content</Window>
  ))
;

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Alert />
  ))
  .add('Overlayed', () => (
    <AlertOverlay />
  ))
;

storiesOf('Confirm', module)
  .add('Basic', () => (
    <Confirm />
  ))
  .add('Overlayed', () => (
    <ConfirmOverlay />
  ))
;

storiesOf('Overlay', module)
  .add('Basic', () => (
    <Overlay />
  ))
;

storiesOf('LoadingImage', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <LoadingImage src="https://placeimg.com/1280/900/any" autoload={boolean('autoload', true)} />
  ))
;

storiesOf('DotPagination', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <DotPagination amount={number('amount', 5)} />
  ))
;