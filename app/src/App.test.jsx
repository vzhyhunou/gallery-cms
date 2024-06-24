import React from 'react'
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

import App from './App'
import config from './config';

const renderWithHistory = (route = '/') => render(
    <MemoryRouter initialEntries={[route]}>
        <App {...{config}}/>
    </MemoryRouter>
)

describe('App', () => {

    it('should render home page', async () => {
        renderWithHistory()
        expect(await screen.findByText('Croissant')).toBeDefined()
        expect(document.title).toEqual('Our Bread Bakery')
    })

    it('should render login page', async () => {
        renderWithHistory('/login')
        expect(await screen.findByText('Sign in')).toBeDefined()
    })
})
