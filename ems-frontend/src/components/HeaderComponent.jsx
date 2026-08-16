import React from 'react'

const HeaderComponent = () => {
  return (
    <header className="app-header">
      <nav className="app-navbar">
        <a
          className="app-brand"
          href="https://github.com/Vivekkushwahaofficial"
          target="_blank"
          rel="noreferrer"
        >
          <span className="brand-mark">E</span>

          <span>
            <span className="brand-title">
              Employee Management
            </span>

            <span className="brand-subtitle">
              System
            </span>
          </span>
        </a>
      </nav>
    </header>
  )
}

export default HeaderComponent