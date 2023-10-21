import { render, screen } from '@testing-library/react';
import  "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest"
import Navbar from '../components/navbar';

const user = {
    name: "John Doe"
}

describe('Navbar', () => {
    it('should render the heading Inscription and Connexion if no User', () => {
        render(<Navbar />);
        const signupLink = screen.getByRole("link", { name: "Inscription" });
        const signinLink = screen.getByRole("link", { name: "Connexion" });
        expect(signupLink).toBeInTheDocument();
        expect(signinLink).toBeInTheDocument();
    })
});

describe('Navbar', () => {
    it('should render the heading Profil and Deconnexion if user', () => {
        render(<Navbar user={user} />);
        const profilLink = screen.getByRole("link", { name: "Profil" });
        const logoutLink = screen.getByRole("link", { name: "Deconnexion" });
        expect(profilLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();
    })
});