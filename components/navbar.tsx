import Link from 'next/link'
import React from 'react'

type User = {
  name: string
}

type TypeNavBarProps = {
  user?: User
}

export default function Navbar({ user }: TypeNavBarProps) {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      {user ? (
        <>
          <Link href="Profil">Profil</Link>
          <Link href="Deconnexion">Deconnexion</Link>
        </>
      ) : (
        <>
          <Link href="connexion">Connexion</Link>
          <Link href="inscription">Inscription</Link>
        </>
      )}
    </nav>
  )
}
