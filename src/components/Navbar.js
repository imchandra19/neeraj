import React from 'react'

const navbar = () => {
    return (
      <section class="mb-3">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent5"
            aria-controls="navbarToggleExternalContent5" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-hamburger"></i>
          </button>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent5">
        <div class="bg-light shadow-3 p-4">
          <button class="btn btn-link btn-block border-bottom m-0">Link 1</button>
          <button class="btn btn-link btn-block border-bottom m-0">Link 2</button>
          <button class="btn btn-link btn-block m-0">Link 3</button>
        </div>
      </div>
    </section>
    )
}

export default navbar
