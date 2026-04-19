import React from 'react'


function Navbarr() {
    const handleSearch = (e) => {
        e.preventDefault();
        // Logique de recherche à implémenter
        console.log("Recherche en cours...");
    };

    const handleCreate = () => {
        // Logique de création de contenu
        console.log("Créer un nouveau contenu");
    };

    const handleLogoClick = () => {
        console.log("Redirection vers l'accueil");
    };

    return (
        <div className='mynav'>
            <img src='https://logos-marques.com/wp-content/uploads/2021/03/Youtube-Logo.png'
                alt="YouTube Logo" />
            <div className='search'>
                <input type="text" placeholder="Search" />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
                </button>

            </div>
            <div>
                <button> <span>+</span>Create </button>
            </div>
        </div>
    );
}

export default Navbarr;