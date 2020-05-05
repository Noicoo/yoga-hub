import React from 'react';
import ExampleItem from './index';
import Chance from 'chance';
const chance = new Chance();

export default {
  title: 'ExampleItem',
  component: ExampleItem,
};

export const Text = () => (
  <ExampleItem title={chance.string({ alpha: true })} />
);

export const TextLong = () => <ExampleItem title={chance.sentence()} />;
