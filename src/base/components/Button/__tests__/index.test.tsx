import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Button from '../';

describe('Button base/component tests', () => {

    it('Renders only tag', async () => {
        render(
            <Button />,
        )

        expect(screen.getByText('Button')).toBeInTheDocument()
    })
})