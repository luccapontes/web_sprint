import React from 'react';
import Text from '../text/Text';
import Title from '../text/Title';
import classes from './IngredientsTable.module.scss';

function IngredientsTable({ ingredientsWithMeasures }) {
  return (
    <main>
      <Title className={classes.title}>Ingredientes</Title>
      <table className={classes.ingredientsTable}>
        <tbody>
          {ingredientsWithMeasures.map((ingredient) => (
            <tr key={ingredient.index}>
              <td>
                <Text>
                  {ingredient.ingredient}
                </Text>
              </td>
              <td>
                <Text>
                  {ingredient.measure}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default IngredientsTable;
