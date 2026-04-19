import React, { useState } from 'react'

function Navbarr() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Recherche pour:", searchQuery);
    };

    const handleCreate = () => {
        console.log("Créer un nouveau contenu");
    };

    const handleLogoClick = () => {
        console.log("Redirection vers l'accueil");
    };

    const handleNotifications = () => {
        console.log("Notifications");
    };

    const handleProfile = () => {
        console.log("Profil utilisateur");
    };

    return (
        <div className='mynav'>
            {/* Logo */}
            <div className='nav-logo' onClick={handleLogoClick}>
                <img src='https://logos-marques.com/wp-content/uploads/2021/03/Youtube-Logo.png'
                    alt="YouTube Logo" />
            </div>

            {/* Search Bar */}
            <form className='search' onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='search-btn' type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20">
                        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" fill="currentColor" />
                    </svg>
                </button>
            </form>

            
            <div className='nav-icons'>
               
                <button className='nav-btn create-btn' onClick={handleCreate}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor" />
                    </svg>
                    <span>Créer</span>
                </button>

                
                <button className='nav-icon-btn' onClick={handleNotifications} title="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor" />
                    </svg>
                </button>

                
                <button className='nav-icon-btn' title="Applications">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
                    </svg>
                </button>

                
                <button className='nav-icon-btn profile-btn' onClick={handleProfile} title="Profil">
                    <img 
                        className='user-avatar' 
                        src='https://yt3.ggpht.com/ytc/AAUvwnjZ3v5T5RFz7Vl7P3Y5XZ_OZz-FNHXG9Ef-=s88-c-k-no-rj-mo' 
                        alt="Profil" 
                    />
                </button>
            </div>
        </div>
    );
}

export default Navbarr;