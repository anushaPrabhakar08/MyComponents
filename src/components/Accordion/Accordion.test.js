// test('can open accordion items to see the contents', () => {
//     7  const hats = {title: 'Favorite Hats', contents: 'Fedoras are classy'}
//     8  const footware = {
//     9    title: 'Favorite Footware',
//     10    contents: 'Flipflops are the best',
//     11  }
//     12  const {getByText, queryByText} = render(
//     13    <Accordion items={[hats, footware]} />,
//     14  )
//     15
//     16  expect(getByText(hats.contents)).toBeInTheDocument()
//     17  expect(queryByText(footware.contents)).toBeNull()
//     18
//     19  fireEvent.click(getByText(footware.title))
//     20
//     21  expect(getByText(footware.contents)).toBeInTheDocument()
//     22  expect(queryByText(hats.contents)).toBeNull()
//     23})
