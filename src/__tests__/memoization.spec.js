import mongoose from 'mongoose';
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import mongooseSchemaToGraphQL, {
  generateDescriptionForSubField,
  generateNameForSubField,
} from '../../lib/index.min';

test('memoizes created types', () => {
  const NAME = 'ExtendTestSchema';
  const DESCRIPTION = 'Testing';

  const opts = {
    name: NAME,
    class: 'GraphQLObjectType',
    description: DESCRIPTION,
    schema: new mongoose.Schema({
      a: Number,
    }),
    extend: {
      b: { type: GraphQLString },
    },
    exclude: ['_id'],
  };

  expect(mongooseSchemaToGraphQL(opts)).toBe(mongooseSchemaToGraphQL(opts));
});