import { render, screen } from '@testing-library/react';
import App from './components/link';

test('renders something', () => {

  const component = render(<App active={true} children={'hola'} onClick={() => { }} />)

  console.log(component)

});
