/* eslint-disable vitest/no-identical-title */
import '@testing-library/jest-dom/vitest'
import { describe, it, expect } from 'vitest'
import Navbar from '../components/navbar'
import { setup } from '@/test/setup'

const user = {
  name: 'John Doe',
}

describe('Navbar', () => {
  it('should render the heading Inscription and Connexion if no User', () => {
    const { getByRole } = setup(<Navbar />)
    const signupLink = getByRole('link', { name: 'Inscription' })
    const signinLink = getByRole('link', { name: 'Connexion' })
    expect(signupLink).toBeInTheDocument()
    expect(signinLink).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('should render the heading Profil and Deconnexion if user', () => {
    const { getByRole } = setup(<Navbar user={user} />)
    const profilLink = getByRole('link', { name: 'Profil' })
    const logoutLink = getByRole('link', { name: 'Deconnexion' })
    expect(profilLink).toBeInTheDocument()
    expect(logoutLink).toBeInTheDocument()
  })
})
