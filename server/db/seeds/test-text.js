/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('text_content').del()

  await knex('text_content').insert([
    { id: 1, text: 'rowValue1' },
    { id: 2, text: 'rowValue2' },
    { id: 3, text: 'rowValue3' },
  ])
}
