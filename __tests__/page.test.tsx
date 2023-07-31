import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import '@testing-library/jest-dom'
 
describe('Home',  () => {
  it('renders a heading', async() => {
    render(await  Home())
 
    const docH = screen.getByRole('heading', {
      name: "Hello World",
      level: 2
    });

    expect(docH).toBeInTheDocument()
  })
})